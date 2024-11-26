from django.shortcuts import render
from .models import Project, Pricing

def home(request):
    projects = Project.objects.all()
    pricing = Pricing.objects.all()
    return render(request, 'home.html', {'projects': projects, 'pricing': pricing})