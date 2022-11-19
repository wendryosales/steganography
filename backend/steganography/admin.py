from django.contrib import admin

from .models import Image, ImageHidden, MessageDecode


class ImageAdmin(admin.ModelAdmin):
    list_display = ('id', 'image')


class ImageHiddenAdmin(admin.ModelAdmin):
    list_display = ('id', 'image', 'image_hidden')


class MessageDecodeAdmin(admin.ModelAdmin):
    list_display = ('id', 'message', 'image')


admin.site.register(Image, ImageAdmin)
admin.site.register(ImageHidden, ImageHiddenAdmin)
admin.site.register(MessageDecode, MessageDecodeAdmin)
