# Generated by Django 4.1.3 on 2022-11-17 13:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images/')),
            ],
        ),
        migrations.CreateModel(
            name='MessageDecode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField()),
                ('image', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='steganography.image')),
            ],
        ),
        migrations.CreateModel(
            name='ImageHidden',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_hidden', models.ImageField(upload_to='images-hidden/')),
                ('image', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='steganography.image')),
            ],
        ),
    ]
