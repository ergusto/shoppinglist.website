from django.db import models
from django.utils import timezone

# Create your models here.
class Item(models.Model):
    user = models.ForeignKey('users.User', related_name='items')
    title = models.CharField(max_length=180)
    description = models.TextField(max_length=480, null=True, blank=True)
    url = models.URLField(max_length=240, null=True, blank=True)
    complete = models.BooleanField(default=False)
    date = models.DateTimeField(null=True, blank=True, editable=False)
    modified = models.DateTimeField(null=True, blank=True, editable=False)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        now = timezone.now()
        self.modified = now
        if not self.id:
            self.date = now
        super(Item, self).save(*args, **kwargs)
