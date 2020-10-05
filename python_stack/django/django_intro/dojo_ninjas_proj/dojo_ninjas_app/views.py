from django.shortcuts import render, redirect
# from . import models
from .models import Dojo, Ninja

# Create your views here.
def index(request):
    context = {
        "all_dojos": Dojo.objects.all(),
        # "all_ninjas": Ninja.objects.all(),
    }

    return render(request,"index.html", context)

def add_dojo(request):
    Dojo.objects.create(
    dojo_name = request.POST["dojo_name"],
    dojo_city = request.POST["dojo_city"],
    dojo_state = request.POST["dojo_state"],
    )

    return redirect("/") 

def add_ninja(request):
    Ninja.objects.create(
    first_name = request.POST["first_name"],
    last_name = request.POST["last_name"],
    dojo = Dojo.objects.get(id=request.POST["dojo"]),
    )

    return redirect("/")