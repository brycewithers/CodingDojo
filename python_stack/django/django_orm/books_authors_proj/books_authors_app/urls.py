from django.urls import path
from . import views

urlpatterns = [
    path('', views.add_book_page),
    path('books/create', views.create_book),
    path('books/<int:id>', views.book_details_page),
    path('add/author', views.book_details_page),
]