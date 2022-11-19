from django.urls import include, re_path
from rest_framework import routers

from .api import EncodeViewSet, ImageViewSet

router = routers.DefaultRouter()
router.register(r'image', ImageViewSet)
router.register(r'encode', EncodeViewSet)

urlpatterns = [
    re_path(r'^', include(router.urls)),
]
