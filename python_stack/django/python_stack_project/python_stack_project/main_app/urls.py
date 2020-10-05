from django.urls import path
from . import views

urlpatterns = [
    path('', views.reg_login_page),
    path('users/create', views.create_user),
    path('users/login', views.login_user),
    path('dashboard', views.dashboard_page),
    path('users/logout', views.logout),
    path('trips/new', views.new_trip_page),
    path('trips/create', views.create_trip),
    path('trips/<int:id>', views.trip_details_page),
    path('trips/<int:id>/edit', views.edit_trip_page),
    path('trips/<int:id>/update', views.update_trip),
    path('trips/<int:id>/delete', views.delete_trip),
]