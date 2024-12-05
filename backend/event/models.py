from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class EventType(models.Model):
    title=models.CharField(max_length=200)
    details=models.TextField()
    def __str__(self):
        return self.title
    

class EventBooking(models.Model):
    event_type=models.ForeignKey(EventType,on_delete=models.CASCADE)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    event_detail=models.TextField()
    booking_date=models.DateTimeField(auto_now_add=True)
    total_guest=models.IntegerField()
    event_date=models.DateField()
    booking_amount=models.DecimalField(max_digits=10,decimal_places=2)
    booking_details=models.JSONField(null=True,blank=True)

    def __str__(self):
      return f'{self.event_type}-{self.event_date}-{self.user}'
    

class Payment(models.Model):
    booking=models.ForeignKey(EventBooking,on_delete=models.CASCADE)
    txt_id=models.TextField()
    total_amt=models.DecimalField(max_digits=10,decimal_places=2)
    response_data=models.TextField()
    payment_date=models.DateField(auto_now_add=True)


