# Generated by Django 5.1.3 on 2024-12-05 15:18

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("website", "0005_alter_contact_mobile"),
    ]

    operations = [
        migrations.AlterField(
            model_name="contact",
            name="mobile",
            field=models.CharField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="profile",
            name="mobile",
            field=models.IntegerField(null=True),
        ),
    ]
