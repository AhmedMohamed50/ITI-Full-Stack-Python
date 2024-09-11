from django.db import models
from staffs.models import Staff
# Create your models here.

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    instructor = models.ForeignKey(Staff, on_delete=models.CASCADE)  

    def __str__(self):
        return self.title