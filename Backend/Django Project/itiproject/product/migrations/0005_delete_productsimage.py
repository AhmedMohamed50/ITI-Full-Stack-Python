# Generated by Django 5.1.1 on 2024-09-09 20:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_remove_product_image_url_productsimage'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ProductsImage',
        ),
    ]
