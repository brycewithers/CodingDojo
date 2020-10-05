from django.db import models

# Create your models here.
class Dojo(models.Model):
    dojo_name = models.CharField(max_length = 255)
    dojo_city = models.CharField(max_length = 255)
    dojo_state = models.CharField(max_length = 2)
    # desc = models.TextField()

class Ninja(models.Model):
    dojo = models.ForeignKey(Dojo, related_name = "ninjas", on_delete = models.CASCADE)
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)