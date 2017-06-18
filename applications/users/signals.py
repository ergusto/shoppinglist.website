from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from .models import User

@receiver(post_save, sender=User)
def user_post_save(sender, instance, created, **kwargs):
    if created:
    	this = False