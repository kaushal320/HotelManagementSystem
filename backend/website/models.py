from django.db import models
from django.contrib.auth.models import User
from rooms.models import Booking
from event.models import EventBooking
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.
class Review(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    review_text=models.TextField()
    rating=models.IntegerField(default=1)
    room_booking=models.ForeignKey(Booking,on_delete=models.SET_NULL,null=True)
    event_booking=models.ForeignKey(EventBooking,on_delete=models.SET_NULL,null=True)
    add_time=models.DateTimeField(auto_now_add=True)




class Contact(models.Model):
    full_name=models.CharField(max_length=200,null=True)
    email=models.CharField(max_length=200,null=True)
    mobile=models.CharField(blank=True,null=True)
    message=models.TextField(null=True)
    add_time=models.DateTimeField(auto_now_add=True)
  

class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    profile_img=models.ImageField(upload_to='profile_imgs/')
    mobile=models.IntegerField(null=True)

@receiver(post_save,sender=User)
def create_user_profile(sender,instance,created,**kwargs):
    if created:
        Profile.objects.create(user=instance)
