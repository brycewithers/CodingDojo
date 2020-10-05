from django.shortcuts import render, redirect

# Create your views here.

# this function will render the main page where the counter is displayed
def index(request):
    if 'counter' in request.session:
        request.session['counter'] += 1 
    else:
        request.session['counter'] = 1
        

    return render(request, 'index.html')

# this function will clear the session and redirect to the root route
def clear_session(request):
    request.session.clear()
    return redirect('/')