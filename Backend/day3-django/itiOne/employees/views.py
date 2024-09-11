from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Employee
from .serializers import EmployeeSerializer


# Create your views here.

@api_view(['POST'])
def create_employee(request):
    if request.method == 'POST':
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.pagination import PageNumberPagination

@api_view(['GET'])
def list_employees(request):
    if request.method == 'GET':
        paginator = PageNumberPagination()
        paginator.page_size = 10
        employees = Employee.objects.all()
        result_page = paginator.paginate_queryset(employees, request)
        serializer = EmployeeSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)



# from rest_framework import generics
# from .models import Employee
# from .serializers import EmployeeSerializer

# # Create New Employee
# class EmployeeCreateView(generics.CreateAPIView):
#     queryset = Employee.objects.all()
#     serializer_class = EmployeeSerializer

# # List all Employee 
# from rest_framework.pagination import PageNumberPagination

# class EmployeeListView(generics.ListAPIView):
#     queryset = Employee.objects.all()
#     serializer_class = EmployeeSerializer
#     pagination_class = PageNumberPagination

# # Update Employee 
# class EmployeeUpdateView(generics.UpdateAPIView):
#     queryset = Employee.objects.all()
#     serializer_class = EmployeeSerializer
#     lookup_field = 'id'

# # Deleter Employee 
# class EmployeeDeleteView(generics.DestroyAPIView):
#     queryset = Employee.objects.all()
#     serializer_class = EmployeeSerializer
#     lookup_field = 'id'
