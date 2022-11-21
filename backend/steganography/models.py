from django.contrib.auth.models import User
from django.core import validators
from django.db import models


class Image(models.Model):
    image = models.FileField(
        upload_to="images/",
        validators=[
            validators.FileExtensionValidator(
                allowed_extensions=["bmp"]
            )
        ],
    )
    uploaded_by = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True
    )


class ImageHidden(models.Model):
    image = models.ForeignKey(Image, on_delete=models.CASCADE)
    image_hidden = models.FilePathField(path="media/images-hidden/")


class MessageDecode(models.Model):
    message = models.TextField()
    image = models.ForeignKey(Image, on_delete=models.CASCADE)

    def __str__(self):
        return self.message
