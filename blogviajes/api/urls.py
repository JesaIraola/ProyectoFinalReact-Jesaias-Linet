from django.urls import path, include 
from .views import PostView, CategoriaView, AutorView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'Post', PostView, 'post')
router.register(r'Categoria', CategoriaView, 'categoria')
router.register(r'Autor', AutorView, 'autor')

urlpatterns = [
    path('',include(router.urls))
]