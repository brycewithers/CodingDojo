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
    # a user will purchase many 'items'
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

class ItemManager(models.Manager):
    def basic_validator(self, post_data):
        errors = {}

        if len(post_data['title']) < 2:
            errors['title'] = "An item title must consist of at least 2 characters."
        if len(post_data['desc']) < 3:
            errors['desc'] = "Please include a description of the item that is at least 3 characters"
        if len(post_data['price']) < 0:
            errors['price'] = "Please enter a price for this item to be listed at."
        # if len(post_data['stock']) < 1:
        #     errors['stock'] = "Out of stock! :("

        return errors

class Item(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    price = models.IntegerField()
    buyer = models.ForeignKey(User, related_name='items', on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = ItemManager()