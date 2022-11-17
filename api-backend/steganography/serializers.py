from rest_framework import serializers

from .models import Image


class ImageSerializer(serializers.ModelSerializer):
    uploaded_by = serializers.ReadOnlyField(source='uploaded_by.username')

    class Meta:
        model = Image
        fields = ('id', 'image', 'uploaded_by')
