from django.shortcuts import render
from rest_framework.generics import ListAPIView
# Create your views here.
from . import serializers
from . import models

class RoomTypeListView(ListAPIView):
    serializer_class=serializers.RoomTypeSerializer
    queryset=models.RoomType.objects.all()

