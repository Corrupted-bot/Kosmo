from django.shortcuts import redirect, render
from django.views.generic import TemplateView
from .models import Solicitud, SolicitudFacade, REGIONES, Usuario
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.edit import CreateView, UpdateView , DeleteView
from django.urls import reverse_lazy
from django.core.exceptions import PermissionDenied
from django.http import HttpResponse


# Create your views here.
class HomePageView(TemplateView):
    def get(self, request, **kwargs):
            return render(request, "index.html", context=None)

class HomeSolicitudView(LoginRequiredMixin,TemplateView):
    def get(self, request, **kwargs):
            solicitudFacade = SolicitudFacade()
            if not request.user.es_beneficiario:
                return render(request, "solicitudes.html",{"solicitudes": solicitudFacade.buscarSolicitudes()})
            else:
                raise PermissionDenied

class DetalleSolicitudView(LoginRequiredMixin,TemplateView):
    def get(self,request, **kwargs):
        id = int(kwargs["pk"])
        solicitudFacade = SolicitudFacade()
        var = solicitudFacade.buscarSolicitud(id)
        variable = list(REGIONES)
        region = 0
        for i in range(15):
            if variable[i][0]== var.region:
                    region = variable[i][1]
        if not request.user.es_beneficiario:
            return render(request, "solicitud.html",{"solicitud": solicitudFacade.buscarSolicitud(id),"region":region})
        else:
            raise PermissionDenied

class ActualizarSolicitudView(LoginRequiredMixin,TemplateView):
    def get(self,request, **kwargs):
        id = int(kwargs["pk"])
        solicitudFacade = SolicitudFacade()
        p = solicitudFacade.buscarSolicitud(id)
        p.estado = True
        p.save()
        return redirect('solicitudes')

class SolicitudCreate(LoginRequiredMixin,CreateView):
    model = Solicitud
    template_name = './solicitud_form.html'
    fields = ['nombre','rut','telefono','email','imagen','region']   
    success_url = reverse_lazy('seguimiento')
    
    def form_valid(self,form):
        form.instance.user=self.request.user
        userVar = Usuario.objects.get(username=self.request.user)
        userVar.cant_solicitud = True
        userVar.save()
        return super().form_valid(form)

class SolicitudUpdate(LoginRequiredMixin,UpdateView):
    model = Solicitud
    template_name = './solicitud_form.html'
    fields = ['nombre','rut','telefono','email','region','imagen','estado']

class SolicitudDelete(LoginRequiredMixin,DeleteView):
    model = Solicitud
    template_name = './solicitud_confirm_delete.html'
    success_url = reverse_lazy('solicitudes')

class SeguimientoSolicitud(LoginRequiredMixin,TemplateView):
    def get(self, request, **kwargs):
        solicitudFacade = SolicitudFacade()
        var = solicitudFacade.buscarSolicitudes()
        id_solicitud = 0
        for x in var:
            if x.user_id == self.request.user.id:
                id_solicitud = x
                break
        region = 0
        variable = list(REGIONES)
        for i in range(15):
            if variable[i][0]== id_solicitud.region:
                    region = variable[i][1]
        return render(request, "seguimiento.html",{"solicitud": id_solicitud,"region":region})