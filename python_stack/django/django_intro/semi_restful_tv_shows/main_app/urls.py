from django.urls import path
from . import views

urlpatterns = [
    path('', views.root),
    path('shows', views.root),
    path('shows/new', views.add_show),
    path('shows/create', views.create),
    path('shows/<int:id>', views.individual_show),
    path('shows/<int:id>/edit', views.edit_show),
    path('shows/<int:id>/update', views.update_show),
    path('shows/<int:id>/delete', views.delete_show),
]