from django.urls import include, re_path
from rest_framework import routers

from .api import ImageViewSet

router = routers.DefaultRouter()
router.register(r'images', ImageViewSet)

urlpatterns = [
    re_path(r'^', include(router.urls)),
]
