from django.shortcuts import render, redirect
from datetime import datetime
from django.contrib import messages
from .models import User, Item
import bcrypt


# Create your views here.

# this function will render the login and/or registration page
# include a link where an admin can login
def login_reg_page(request):
    
    return render(request, 'login-reg-page.html')

# this function will process our registration form and redirect us to the home page
def create_user(request):
    errors = User.objects.basic_validator(request.POST)
    if len(errors) > 0:
        print('There are errors!')
        for key, val in errors.items():
            messages.error(request, val)

        return redirect('/')

    hashed_pw = bcrypt.hashpw(request.POST['password'].encode(),bcrypt.gensalt()).decode()
    new_user = User.objects.create(
        first_name = request.POST['first_name'],
        last_name = request.POST['last_name'],
        email = request.POST['email'],
        password = hashed_pw
    )

    request.session['user_id'] = new_user.id

    return redirect('/home_page')

# this function will process our login form and redirect us to the home page
def login_user(request):
    login_user = User.objects.filter(email = request.POST['email'])
    
    if len(login_user) == 0:
        print('This email address does not exist in the DB!')
        messages.error(request, 'Invalid loggin credentials.')
    
        return redirect('/')
    
    if not bcrypt.checkpw(
        request.POST['password'].encode(),
        login_user[0].password.encode()
    ):
        print('wrong password')
        messages.error(request, 'Invalid loggin credentials.')

        return redirect('/')

    request.session['user_id'] = login_user[0].id

    return redirect('/home_page')

# this function will render our main home page
def home_page(request):
    if 'user_id' not in request.session:
        messages.error(request, 'You must be logged in with an existing account or register to view this page.')
        return redirect('/')

    context = {
        'logged_in_user': User.objects.get(id=request.session['user_id']),
        'all_items': Item.objects.all(),
    }

    return render(request, 'home-page.html', context)

# this function will render the new item page
def new_item_page(request):
    if 'user_id' not in request.session:
        messages.error(request, 'You must be logged in with an existing account or register to view this page.')
        return redirect('/')
    
    context = {
        'logged_in_user': User.objects.get(id=request.session['user_id']),
    }

    return render(request, 'create-item-page.html', context)

# this function will process the new item form and redirect to the home page
def create_item(request):
    errors = Item.objects.basic_validator(request.POST)
    if len(errors) > 0:
        print('There are errors!')
        for key, val in errors.items():
            messages.error(request, val)

        return redirect('/items/new')

    new_item = Item.objects.create(
        title = request.POST['title'],
        desc = request.POST['desc'],
        price = request.POST['price'],
        # stock = request.POST['stock'],
        buyer = User.objects.get(id=request.session['user_id'])
    )

    id = new_item.id

    return redirect('/home_page')

# this function will render the item details page
def item_details_page(request, id):
    if 'user_id' not in request.session:
        messages.error(request, 'You must be logged in with an existing account or register to view this page.')
        return redirect('/')

    this_item = Item.objects.get(id=id)

    context = {
        'item_details': this_item,
        'current_user': User.objects.get(id=request.session['user_id']),
    }

    return render(request, 'view-this-item.html', context)

# this function will render the edit item page
def edit_item_page(request, id):
    if 'user_id' not in request.session:
        messages.error(request, 'You must be logged in with an existing account or register to view this page.')
        return redirect('/')

    edit_item = Item.objects.get(id=id)

    context = {
        'update_item': edit_item,
    }

    return render(request, 'edit-item-page.html', context)

# this function will update the item details and redirect to the home page
def update_item(request, id):
    errors = Item.objects.basic_validator(request.POST)
    if len(errors) > 0:
        print('There are errors!')
        for key, val in errors.items():
            messages.error(request, val)

        return redirect(f'/items/{id}/edit')

    update_item = Item.objects.get(id=id)
    update_item.title = request.POST['title']
    update_item.desc = request.POST['desc']
    update_item.price = request.POST['price']
    update_item.stock = request.POST['stock']
    update_item.save()

    return redirect('/home_page')

# this function will delete the item from the DB
def delete_item(request, id):
    delete_item = Item.objects.get(id=id).delete()

    return redirect('/home_page')

# this function will let the user logout
def logout(request):
    request.session.clear()

    return redirect('/')