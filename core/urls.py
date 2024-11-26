from django.urls import path
from .views import home

from django.contrib import admin
app_name = 'core'  # Optional, but recommended

urlpatterns = [
    path('', home, name='home'),
]