from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField(unique=True)
    enrolled_courses = models.ManyToManyField('courses.Course')

    def __str__(self):
        return self.name
