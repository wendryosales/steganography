from django.urls import include, re_path
from rest_framework import routers

from .api import DecodeViewSet, EncodeViewSet, ImageViewSet

router = routers.DefaultRouter()
router.register(r'image', ImageViewSet)
router.register(r'encode', EncodeViewSet)
router.register(r'decode', DecodeViewSet)

urlpatterns = [
    re_path(r'^', include(router.urls)),
]
