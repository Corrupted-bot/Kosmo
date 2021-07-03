from django.db.models import fields
from rest_framework import serializers
from .models import Solicitud

class SolicitudSerializer(serializers.ModelSerializer):

    class Meta:
        model= Solicitud
        fields = ("id","nombre","rut","telefono","email")
        read_only_fields=()