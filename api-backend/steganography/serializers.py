from rest_framework import serializers

from .models import Image, ImageHidden


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('image',)


class RequestImageHiddenSerializer(serializers.ModelSerializer):
    message = serializers.CharField(max_length=1000)

    class Meta:
        model = ImageHidden
        fields = ('image', 'message')


class ImageHiddenSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageHidden
        fields = ('image', 'image_hidden')

    def __str__(self):
        return self.image
