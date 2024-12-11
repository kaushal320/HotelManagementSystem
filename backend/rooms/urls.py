from django.urls import path,include
from . import views
urlpatterns = [
    path('room-types',views.RoomTypeListView.as_view())
]
