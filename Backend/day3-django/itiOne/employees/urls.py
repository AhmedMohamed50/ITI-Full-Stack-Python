from django.urls import path
# from .views import EmployeeCreateView, EmployeeListView, EmployeeUpdateView, EmployeeDeleteView
from . import views

urlpatterns = [
    # Function-Based Views
    path('', views.list_employees, name='list_employees'),
    path('create/', views.create_employee, name='create_employee'),

    # # Class-Based Views
    # path('', EmployeeListView.as_view(), name='list_employees'),
    # path('create/', EmployeeCreateView.as_view(), name='create_employee'),
    # path('update/<int:id>/', EmployeeUpdateView.as_view(), name='update_employee'),
    # path('delete/<int:id>/', EmployeeDeleteView.as_view(), name='delete_employee'),
]