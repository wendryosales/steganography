import mimetypes
import os
from urllib.parse import unquote
from wsgiref.util import FileWrapper

from django.conf import settings
from django.http import FileResponse, HttpResponse
from rest_framework import status, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.mixins import (CreateModelMixin, ListModelMixin,
                                   RetrieveModelMixin)
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response

from .core import Steganography
from .models import Image, ImageHidden
from .serializers import (ImageHiddenListSerializer, ImageHiddenSerializer,
                          ImageListSerializer, ImageSerializer,
                          RequestImageHiddenSerializer)

steganography = Steganography()


class ImageViewSet(
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    viewsets.GenericViewSet,
):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    parser_classes = (MultiPartParser,)

    def get_serializer(self, *args, **kwargs):
        if self.action == "create":
            return ImageSerializer(*args, **kwargs)
        return ImageListSerializer(
            *args, **kwargs, context={"request": self.request}
        )

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        response_data = serializer.save()
        headers = self.get_success_headers(serializer.data)
        response = {
            "id": response_data.id,
            "url": f"/image/{response_data.id}",
            "message": "Image uploaded successfully",
        }
        return Response(
            response, status=status.HTTP_201_CREATED, headers=headers
        )

    def retrieve(self, request, *args, **kwargs):
        queryset = Image.objects.get(id=kwargs["pk"])
        file_handle = queryset.image.path
        with open(file_handle, "rb") as file:
            response = HttpResponse(
                FileWrapper(file), content_type="image/bmp"
            )
            response["Content-Disposition"] = (
                "attachment; filename=original_" + queryset.image.name
            )
            return response


class EncodeViewSet(CreateModelMixin, viewsets.GenericViewSet):
    queryset = ImageHidden.objects.all()
    serializer_class = RequestImageHiddenSerializer

    def create(self, request, *args, **kwargs):
        pk_original_image = request.data["image"]
        message = request.data["message"]
        image_original = Image.objects.get(id=pk_original_image)
        url_image = image_original.image.path
        encoded_image = steganography.encode(url_image, message)
        data = {
            "image": image_original.id,
            "image_hidden": encoded_image,
        }
        serializer = ImageHiddenSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        response_data = serializer.save()
        headers = self.get_success_headers(serializer.data)
        response = {
            "id": response_data.id,
            "message": "Image encoded successfully",
        }

        return Response(
            response,
            status=status.HTTP_201_CREATED,
            headers=headers,
        )


class DecodeViewSet(
    ListModelMixin, RetrieveModelMixin, viewsets.GenericViewSet
):
    queryset = ImageHidden.objects.all()
    serializer_class = ImageHiddenSerializer

    def get_serializer(self, *args, **kwargs):
        if self.action == "list":
            return ImageHiddenListSerializer(
                *args, **kwargs, context={"request": self.request}
            )
        return ImageHiddenSerializer(*args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        obj = self.get_object()
        url_image = obj.image_hidden
        message_decoded = steganography.decode(url_image)
        base_url = request.build_absolute_uri().replace(
            request.get_full_path(), '/'
        )
        image_original = request.build_absolute_uri(obj.image.image.url)
        data = {
            "id": obj.id,
            "image_original": image_original,
            "image_hidden": base_url + str(obj.image_hidden),
            'message': message_decoded,
        }
        return Response(
            data, status=status.HTTP_200_OK
        )


@api_view(["GET"])
@permission_classes([])
def get_media_path(request, path):
    if not os.path.exists(f"{settings.MEDIA_ROOT}/{path}"):
        return Response("No such file exists.", status=404)

    mimetype, encoding = mimetypes.guess_type(path, strict=True)
    if not mimetype:
        mimetype = "text/html"
    file_path = unquote(os.path.join(settings.MEDIA_ROOT, path)).encode(
        "utf-8"
    )
    return FileResponse(open(file_path, "rb"), content_type=mimetype)
