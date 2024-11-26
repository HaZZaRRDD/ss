from django.contrib import admin
from .models import Project, Pricing, Contact

admin.site.register(Project)
admin.site.register(Pricing)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')
    search_fields = ('name', 'email')
admin.site.register(Contact)