from django.test.client import Client
from .models import Solicitud
from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from django.contrib.auth import get_user_model

class ApiTestCase(TestCase):
    fixtures = ["solicitudes.json",]
    def setUp(self):
        self.client=APIClient()
        self.solicitud_data ={"nombre":"Diego","rut":"20,419,465-7","telefono":"992048648","email":"diego.lopez2000@hotmail.com"}
        User = get_user_model()
        self.user = User.objects.create_superuser("servidor","correo@test.com","quimica2000")
        c = Client()
        response = c.post("/api/login/",{"username":"servidor","password":"quimica2000"})
        self.token = response.json()["token"]
        self.client = APIClient()
        self.client.credentials(HTTP_AUTHORIZATION='Token '+ self.token)
        

    def test_api_solicitud_create(self):
        response= self.client.post(
            reverse("api_solicitud_create"),
            self.solicitud_data,
            format="json")
        self.assertEquals(response.status_code, status.HTTP_201_CREATED)
    
    def test_api_solicitud_retrieve(self):
        solicitud = Solicitud.solicitudes.get(id=27)
        
        response = self.client.get(reverse("api_solicitud_rud",kwargs={"pk": solicitud.id}),format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response,solicitud)
    
    def test_api_solicitud_update(self):
        solicitud = Solicitud.solicitudes.get(id=32)
        update = {"nombre":"Diego Lopez"}
        response = self.client.patch(
            reverse("api_solicitud_rud",kwargs={"pk":solicitud.id}),
            update, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_api_solicitud_delete(self):
        solicitud = Solicitud.solicitudes.get(id=35)
        response = self.client.delete(
            reverse("api_solicitud_rud", kwargs={"pk":solicitud.id}),
            format="json",
            follow=True
        )
        self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)