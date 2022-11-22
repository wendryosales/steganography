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


class ImageHiddenListSerializer(serializers.ModelSerializer):
    image_hidden = serializers.SerializerMethodField()
    image_original = serializers.SerializerMethodField()

    class Meta:
        model = ImageHidden
        fields = ('id', 'image_original', 'image_hidden')

    def get_image_hidden(self, obj):
        request = self.context.get('request')
        base_url = request.build_absolute_uri().replace(
            request.get_full_path(), '/'
        )
        return base_url + str(obj.image_hidden)

    def get_image_original(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.image.image.url)


class ImageListSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = ('id', 'image', 'url', 'name')

    def get_name(self, obj):
        remove_path = obj.image.name.split('/')[-1]
        return remove_path
