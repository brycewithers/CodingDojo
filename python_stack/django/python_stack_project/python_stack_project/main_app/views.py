from django.shortcuts import render, redirect
from datetime import datetime
from django.contrib import messages
from .models import User, Trip
import bcrypt


# Create your views here.

# this function will render the landing page
def reg_login_page(request):
    
    return render(request, 'reg-login-page.html')

# this function will process our registration form and redirect us to the dashboard
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

    return redirect('/dashboard')

# this function will process our login form and redirect us to the dashboard
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

    return redirect('/dashboard')

# this function will render our main dashboard page
def dashboard_page(request):
    if 'user_id' not in request.session:
        messages.error(request, 'You must be logged in with an existing account or register to view this page.')
        return redirect('/')

    context = {
        'logged_in_user': User.objects.get(id=request.session['user_id']),
        'all_trips': Trip.objects.all(),
    }

    return render(request, 'dashboard-page.html', context)

# this function will render the new trip page
def new_trip_page(request):
    if 'user_id' not in request.session:
        messages.error(request, 'You must be logged in with an existing account or register to view this page.')
        return redirect('/')
    
    context = {
        'logged_in_user': User.objects.get(id=request.session['user_id']),
    }

    return render(request, 'create-trip-page.html', context)

# this function will process the new trip form and redirect to the dashboard
def create_trip(request):
    errors = Trip.objects.basic_validator(request.POST)
    if len(errors) > 0:
        print('There are errors!')
        for key, val in errors.items():
            messages.error(request, val)

        return redirect('/trips/new')

    new_trip = Trip.objects.create(
        destination = request.POST['destination'],
        start_date = request.POST['start_date'],
        end_date = request.POST['end_date'],
        plan = request.POST['plan'],
        traveler = User.objects.get(id=request.session['user_id'])
    )

    id = new_trip.id

    return redirect('/dashboard')

# this function will render the trip details page
def trip_details_page(request, id):
    if 'user_id' not in request.session:
        messages.error(request, 'You must be logged in with an existing account or register to view this page.')
        return redirect('/')

    this_trip = Trip.objects.get(id=id)

    context = {
        'trip_details': this_trip,
        'current_user': User.objects.get(id=request.session['user_id']),
    }

    return render(request, 'view-this-trip.html', context)

# this function will render the edit trip page
def edit_trip_page(request, id):
    if 'user_id' not in request.session:
        messages.error(request, 'You must be logged in with an existing account or register to view this page.')
        return redirect('/')

    edit_trip = Trip.objects.get(id=id)
    edit_trip.start_date = edit_trip.start_date.strftime("%Y-%m-%d")
    edit_trip.end_date = edit_trip.end_date.strftime("%Y-%m-%d")

    context = {
        'update_trip': edit_trip,
    }

    return render(request, 'edit-trip-page.html', context)

# this function will update the trip details and redirect to the dashboard
def update_trip(request, id):
    errors = Trip.objects.basic_validator(request.POST)
    if len(errors) > 0:
        print('There are errors!')
        for key, val in errors.items():
            messages.error(request, val)

        return redirect(f'/trips/{id}/edit')

    update_trip = Trip.objects.get(id=id)
    update_trip.destination = request.POST['destination']
    update_trip.start_date = request.POST['start_date']
    update_trip.end_date = request.POST['end_date']
    update_trip.plan = request.POST['plan']
    update_trip.save()

    return redirect('/dashboard')

# this function will delete the trip from the DB
def delete_trip(request, id):
    delete_trip = Trip.objects.get(id=id).delete()

    return redirect('/dashboard')

# this function will let the user logout
def logout(request):
    request.session.clear()

    return redirect('/')