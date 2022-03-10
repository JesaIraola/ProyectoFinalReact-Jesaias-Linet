from django.db import models
from pydoc import describe
from tabnanny import verbose
from unicodedata import category
from ckeditor.fields import RichTextField
from django.template.response import TemplateResponse


class Categoria(models.Model):
    id = models.AutoField(primary_key = True)
    nombre = models.CharField("Nombre de la Categoría" , max_length = 100, null = False, blank = False)
    estado = models.BooleanField("Categoría activada/Categoría desactivada", default = True)
    fecha_creacion = models.DateField ("Fecha de creación",auto_now = False,auto_now_add = True)
    
    
    class Meta :
        verbose_name = "Categoría"
        verbose_name_plural = "Categorías"
    
    
    def __str__ (self):
        return self.nombre
    
class Autor (models.Model):
    id = models.AutoField(primary_key = True)
    nombre = models.CharField("Nombre del autor ", max_length=255, null = False , blank = False)
    apellidos = models.CharField("Apellidos del autor" , max_length=255, null = False , blank = False)
    correo = models.EmailField ("Gmail ",max_length=255,blank = False, null = False)
    estado = models.CharField("Autor activado/desactivado",max_length=255,default = True)
    fecha_creacion = models.DateField ("Fecha de creación",auto_now = False,auto_now_add = True)
    
    class Meta:
        verbose_name = "Autor"
        verbose_name_plural = "Autores"
        
    def __str__(self): 
        return "{0},{1}".format ( self.apellidos,self.nombre)
    
    
    
class Post(models.Model):
    id = models.AutoField(primary_key= True)
    titulo = models.CharField('Titulo',max_length=90,blank = False,null= False)
    slug = models.CharField('Slug', max_length=100,blank=False,null = False)
    descripcion = models.CharField('Descripcion',max_length=110 , blank = False , null = False)
    contenido = RichTextField()
    imagen = models.URLField(max_length= 255, blank = False, null = False)
    autor = models.ForeignKey(Autor, on_delete = models.CASCADE)
    categoria = models.ForeignKey(Categoria, on_delete = models.CASCADE)
    estado = models.BooleanField('Publicado/No Publicado', default = True)
    fecha_creacion = models.DateField('Fecha de creacion',auto_now=False, auto_now_add=True) 
    
    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = 'Pots'
        
    def __str__(self):
        return self.titulo      
