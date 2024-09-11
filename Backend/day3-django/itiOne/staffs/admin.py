from django.contrib import admin
from .models import Staff
# Register your models here.


@admin.register(Staff)
class StaffAdmin(admin.ModelAdmin):
    list_display = ('name', 'department', 'email', 'position')
    search_fields = ('name', 'email')