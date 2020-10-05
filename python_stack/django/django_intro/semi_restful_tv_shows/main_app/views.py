from django.shortcuts import render, redirect
from datetime import datetime
from .models import Show
from django.contrib import messages

# Create your views here.
# pass context variable and render home page
def root(request):
    context = {
        'all_shows': Show.objects.all(),
    }
    return render(request, 'all_shows.html', context)

# render page that will be our 'add a show' page
def add_show(request):
    return render(request, 'create.html')

# process our form and create new show
def create(request):
    errors = Show.objects.basic_validator(request.POST)

    if len(errors) > 0:
        print("errors exist")
        for key, val in errors.items():
            messages.error(request, val)

        return redirect("/shows/new")

    new_show = Show.objects.create(
        title = request.POST['title'],
        network = request.POST['network'],
        release_date = request.POST['release_date'],
        desc = request.POST['desc'],
    )
    id = new_show.id
    return redirect(f'/shows/{id}')

# render a page that will show the new_show info
def individual_show(request, id):
    show_to_edit= Show.objects.get(id=id)
    show_to_edit.release_date = show_to_edit.release_date.strftime("%Y-%m-%d")
    context = {
        'this_show': show_to_edit,         
    }
    return render(request, 'single_show.html', context)

def edit_show(request, id):
    show_to_edit= Show.objects.get(id=id)
    show_to_edit.release_date = show_to_edit.release_date.strftime("%Y-%m-%d")

    context = {
        'this_show': show_to_edit,         
    }

    return render(request, 'edit.html', context)

def update_show(request, id):
    errors = Show.objects.basic_validator(request.POST)

    if len(errors) > 0:
        print("errors exist")
        for key, val in errors.items():
            messages.error(request, val)

        return redirect(f"/shows/{id}/edit")

    show_to_update= Show.objects.get(id=id)
    show_to_update.title = request.POST['title']
    show_to_update.network = request.POST['network']
    show_to_update.release_date = request.POST['release_date']
    show_to_update.desc = request.POST['desc']
    show_to_update.save()

    return redirect(f'/shows/{id}')

def delete_show(request, id):
    show_to_delete = Show.objects.get(id=id).delete()
    
    return redirect("/shows")