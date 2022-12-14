# Generated by Django 4.1.3 on 2022-11-19 01:15

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('steganography', '0003_alter_image_image_alter_imagehidden_image_hidden'),
    ]

    operations = [
        migrations.AlterField(
            model_name='imagehidden',
            name='image_hidden',
            field=models.FileField(upload_to='media/images-hidden/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['bmp'])]),
        ),
    ]
