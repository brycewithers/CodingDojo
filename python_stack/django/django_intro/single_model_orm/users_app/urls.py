from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    # path('root', views.index),
    # path('process_add_user', views.process_add_user)
]
