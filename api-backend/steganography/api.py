from wsgiref.util import FileWrapper

from django.http import HttpResponse
from rest_framework import status, viewsets
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response

from .models import Image
from .serializers import ImageSerializer


class ImageViewSet(
    CreateModelMixin, RetrieveModelMixin, viewsets.GenericViewSet
):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    parser_classes = (MultiPartParser,)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        response = {
            "id": serializer.data["id"],
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
