from wsgiref.util import FileWrapper

from django.http import HttpResponse
from rest_framework import status, viewsets
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response

from .core import Steganography
from .models import Image, ImageHidden
from .serializers import (ImageHiddenSerializer, ImageSerializer,
                          RequestImageHiddenSerializer)

steganography = Steganography()


class ImageViewSet(
    CreateModelMixin, RetrieveModelMixin, viewsets.GenericViewSet
):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    parser_classes = (MultiPartParser,)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        response_data = serializer.save()
        headers = self.get_success_headers(serializer.data)
        response = {
            "id": response_data.id,
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
    parser_classes = (MultiPartParser,)

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
