from operator import index
from .views import index
from django.urls import path

urlpatterns = [
    path('', index)
]