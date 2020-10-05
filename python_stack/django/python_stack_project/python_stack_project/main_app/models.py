from django.db import models
import re

# Create your models here.
class UserManager(models.Manager):
    def basic_validator(self, post_data):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        errors = {}

        if len(post_data['first_name']) < 2:
            errors['first_name'] = "Please enter a first name greater than 2 characters."
        if len(post_data['last_name']) < 2:
            errors['last_name'] = "Please enter a last name greater than 2 characters."
        if not EMAIL_REGEX.match(post_data['email']):    # test whether a field matches the pattern            
            errors['email'] = "Invalid email address!"
        if len(post_data['password']) < 8:
            errors['password'] = "Please enter a password with at least 8 characters."
        if post_data['password'] != post_data['confirm_pw']:
            errors['confirm_pw'] = "Please match your confirmation entry with your password."
        
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField(max_length=64)
    password = models.CharField(max_length=64)
    # a user aka 'traveler' will take many trips

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

class TripManager(models.Manager):
    def basic_validator(self, post_data):
        errors = {}

        if len(post_data['destination']) < 3:
            errors['destination'] = "A destination must consist of at least 3 characters!."
        if len(post_data['start_date']) < 10:
            errors['start_date'] = "The provided 'start date' in not valid. Please follow a mm/dd/yyyy format."
        if len(post_data['end_date']) < 10:
            errors['end_date'] = "The provided 'end date' in not valid. Please follow a mm/dd/yyyy format."
        if len(post_data['plan']) < 3:
            errors['plan'] = "Please provide a plan that is at least 3 characters."

        return errors

class Trip(models.Model):
    destination = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    plan = models.TextField()
    traveler = models.ForeignKey(User, related_name = 'trips', on_delete = models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = TripManager()