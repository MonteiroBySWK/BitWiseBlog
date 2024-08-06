from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=100, blank=False)
    author = models.CharField(max_length=50, blank=False)
    text = models.TextField(blank=False)
    likes = models.IntegerField(blank=False, default=0) #Ignore

    def __str__(self):
        return str(self.title)

