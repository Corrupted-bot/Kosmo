from django.db import models
from django.contrib.auth.models import AbstractUser
import os
from django.conf import settings
# Create your models here.

class Usuario(AbstractUser):
    nombre = models.CharField(max_length=30)
    es_beneficiario = models.BooleanField(default=True)
    es_ejecutivo_ventas = models.BooleanField(default=False)
    cant_solicitud = models.BooleanField(default=False)


REGIONES = (
        (1, 'Región de Arica y Parinacota'),
        (2, 'Región de Tarapacá'),
        (3, 'Región de Antofagasta'),
        (4, 'Region de Atacama'),
        (5, 'Región de Coquimbo'),
        (6, 'Región de Valparaíso'),
        (7, 'Región del Libertador General Bernardo OHiggins'),
        (8, 'Región del Maule'),
        (9, 'Región del Bio-Bio'),
        (10, 'Región de la Araucania'),
        (11, 'Región de los Ríos'),
        (12, 'Región de los Lagos'),
        (13, 'Región Aysén del General Carlos Ibáñez del Campo'),
        (14, 'Región de Magallanes y de la Antártica Chilena'),
        (15, 'Región Metropolitana de Santiago'),
)



class Solicitud(models.Model):
    nombre = models.CharField(max_length=60)
    rut = models.CharField(max_length=12)
    solicitudes = models.Manager()
    telefono = models.CharField(max_length=12)
    email = models.EmailField(max_length=50)
    imagen=models.FileField(upload_to='imagenes',blank=True, null=True)
    estado = models.BooleanField(default=False)
    region = models.IntegerField(choices=REGIONES,default=1)
    fecha_creacion = models.DateTimeField(auto_now_add=True, null=True)
    user = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __sts__(self):
        return self.nombre
    def delete(self, *args, **kwargs):
        if(self.imagen):
            os.remove(os.path.join(settings.MEDIA_ROOT, self.imagen.name))
        super(Solicitud,self).delete(*args,**kwargs)



class SolicitudFacade:
    def __init__(self):
        self.solicitudes_beneficiarios = Solicitud.solicitudes
    def buscarSolicitudes(self):
        return self.solicitudes_beneficiarios.all()
    def buscarSolicitud(self,id):
        return self.solicitudes_beneficiarios.get(id=id)
    

