# Generated by Django 5.1.3 on 2024-12-05 15:16

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("website", "0003_profile"),
    ]

    operations = [
        migrations.AlterField(
            model_name="contact",
            name="email",
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="contact",
            name="full_name",
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="contact",
            name="message",
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name="contact",
            name="mobile",
            field=models.IntegerField(blank=True),
        ),
    ]