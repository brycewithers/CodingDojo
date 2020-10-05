from django.shortcuts import render, redirect
from . models import User

# Create your views here.
def index(request):
    context = {
        "all_users": User.objects.all()
    }
    return render(request, 'index.html', context)

def add_user(request):
    # request.session['first_name'] = request.POST['first_name']
    # request.session['last_name'] = request.POST['last_name']
    # request.session['email_address'] = request.POST['email_address']
    # request.session['age'] = request.POST['age']
    User.objects.create(
        first_name = request.POST["first_name"],
        last_name = request.POST["last_name"],
        email_address = request.POST["email_address"],
        age = request.POST["age"],
    )

    return redirect('/')
    # return render(request, 'index.html')