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
        if not EMAIL_REGEX.match(post_data['email_address']):    # test whether a field matches the pattern            
            errors['email_address'] = "Invalid email address!"
        if len(post_data['password']) < 8:
            errors['password'] = "Please enter a password with at least 8 characters."
        if post_data['password'] != post_data['confirm_pw']:
            errors['confirm_pw'] = "Please match your confirmation entry with your password."
        
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email_address = models.EmailField(max_length=64)
    password = models.CharField(max_length=64)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()