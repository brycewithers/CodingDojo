from django.db import models

# Create your models here.
class ShowManager(models.Manager):
    def basic_validator(self, post_data):
        errors = {}

        if len(post_data["title"]) < 2:
            errors["title"] = "The show title must be at least 2 characters."
        if len(post_data["network"]) < 2:
            errors["network"] = "The network must be at least 2 characters."
        if len(post_data["release_date"]) < 10:
            errors["release_date"] = "Release date entry is not valid. You must follow the 'mm/dd/yyyy' format."
        
        return errors

class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    release_date = models.DateField()
    desc = models.TextField(default=None)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True) 

    objects = ShowManager()