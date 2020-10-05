from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User
import bcrypt

# Create your views here.
def login_reg_page(request):
    return render(request, 'login-reg-page.html')

def create_user(request):
    errors = User.objects.basic_validator(request.POST)
    if len(errors) > 0:
        print('There are errors!')
        for key, val in errors.items():
            messages.error(request, val)

        return redirect('/')

    hashed_pw = bcrypt.hashpw(request.POST['password'].encode(),bcrypt.gensalt()).decode()
    new_user = User.objects.create(
        first_name = request.POST["first_name"],
        last_name = request.POST["last_name"],
        email_address = request.POST["email_address"],
        password = hashed_pw,
    )
    request.session["user_id"] = new_user.id

    return redirect('/users/success')
 
def login(request): # we are checking 2 class attributes
    login_users = User.objects.filter(email_address = request.POST['email_address'])
    if len(potential_users) == 0:
        print('This email address does not exist in the DB!')
        messages.error(request, 'Invalid loggin credentials.')
        
        return redirect('/')

    if not bcrypt.checkpw(
        request.POST['password'].encode(),
        login_users[0].password.encode()
    ):
        print('wrong password')
        messages.errors(request, 'Invalid loggin credentials.')
        
        return redirect('/')

    request.session['user_id'] = login_users[0].id
    
    return redirect('/users/success') 

def welcome_page(request):
    context = {
        "current_user": User.objects.get(id=request.session['user_id'])
    }

    return render(request, 'success.html', context)

def log_out(request):
    request.session.pop('user_id')
    
    return redirect('/')
