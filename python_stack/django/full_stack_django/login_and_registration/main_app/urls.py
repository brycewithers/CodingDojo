from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_reg_page),
    path('users/create', views.create_user),
    path('users/login', views.login),
    path('users/success', views.welcome_page),
    path('users/log-out', views.log_out),
]