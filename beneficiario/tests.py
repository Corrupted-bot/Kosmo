from django.http import response
from django.test import TestCase
from django.urls.base import reverse
from .models import Solicitud, SolicitudFacade, Usuario
from rest_framework import status
# Create your tests here.

class SolicitudTestCase(TestCase):
    def setUp(self):
        self.nombre = "Diego"
        self.rut = "20.141.465-7"
        self.telefono = "948766743"
        self.email = "diego.lopez2000@hotmail.com"
        self.imagen = False
        self.estado = False
        self.user = Usuario(username="juanito")
        self.user.save()
        self.solicitud = Solicitud(nombre=self.nombre, rut=self.rut, telefono=self.telefono, email=self.email,imagen=self.imagen,estado=self.estado,user=self.user)

    def test_creacion_de_solicitud(self):
        old_count = Solicitud.solicitudes.count()
        self.solicitud.save()
        new_count = Solicitud.solicitudes.count()
        self.assertNotEqual(old_count, new_count)
    

