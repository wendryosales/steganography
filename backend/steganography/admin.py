from django.contrib import admin

from .models import Image, ImageHidden


class ImageAdmin(admin.ModelAdmin):
    list_display = ('id', 'image')


class ImageHiddenAdmin(admin.ModelAdmin):
    list_display = ('id', 'image', 'image_hidden')


admin.site.register(Image, ImageAdmin)
admin.site.register(ImageHidden, ImageHiddenAdmin)
