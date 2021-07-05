from django.conf.urls import url, re_path
from django.urls import path, include, reverse
from beneficiario import views, views_api
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r"^$",views.HomePageView.as_view(), name="index"),
    url(r"solicitudes/",views.HomeSolicitudView.as_view(), name="solicitudes"),
    url(r"solicitud/(?P<pk>\d+)/$",views.DetalleSolicitudView.as_view(),name="detalle"),
    url(r"^solicitud/create/$",views.SolicitudCreate.as_view(),name="solicitud_create"),
    url(r'^solicitud/(?P<pk>\d+)/update/$', views.SolicitudUpdate.as_view(success_url="/solicitudes/"),name="solicitud_update"),
    url(r'^solicitud/(?P<pk>\d+)/delete/$', views.SolicitudDelete.as_view(success_url="/solicitudes/"),name="solicitud_delete"),
    url(r'^solicitud/(?P<pk>\d+)/estado/$', views.ActualizarSolicitudView.as_view(),name="solicitud_estado"),
    url(r'^seguimiento/$', views.SeguimientoSolicitud.as_view(),name="seguimiento"),
    url(r'^api/solicitud/$',views_api.SolicitudCreateAPIView.as_view(),name="api_solicitud_create"),
    url(r'^api/solicitud/(?P<pk>[0-9]+)/$',views_api.SolicitudRetrieveUpdateDestroyAPIView.as_view(),name="api_solicitud_rud"),
    url(r'^api/login/$',views_api.login),
    path("accounts/", include("accounts.urls")),
    path("accounts/", include("django.contrib.auth.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)