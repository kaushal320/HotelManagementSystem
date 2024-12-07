from django.shortcuts import render
from rest_framework.generics import ListAPIView
from . import models
# Create your views here.
from . import serializers
class BannersList(ListAPIView):
    serializer_class=serializers.BannerSerializer
    queryset=models.Banners.objects.all()
    
