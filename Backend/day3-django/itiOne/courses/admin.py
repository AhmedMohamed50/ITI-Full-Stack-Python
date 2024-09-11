from django.contrib import admin
from .models import Course
# Register your models here.

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'instructor', 'start_date', 'end_date')
    search_fields = ('title', 'instructor__name')
    list_filter = ('start_date', 'end_date')