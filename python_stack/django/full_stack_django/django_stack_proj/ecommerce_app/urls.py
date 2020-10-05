from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_reg_page),
    path('users/create', views.create_user),
    path('users/login', views.login_user),
    path('home_page', views.home_page),
    path('users/logout', views.logout),
    path('items/new', views.new_item_page),
    path('items/create', views.create_item),
    path('items/<int:id>', views.item_details_page),
    path('items/<int:id>/edit', views.edit_item_page),
    path('items/<int:id>/update', views.update_item),
    path('items/<int:id>/delete', views.delete_item),
]