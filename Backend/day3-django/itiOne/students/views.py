from django.shortcuts import render

# Create your views here.
def student_list(request):
    students = [
        {'name': 'Ahmed', 'age': 20, 'course': 'Python Basics'},
        {'name': 'Mohamed', 'age': 22, 'course': 'Django Fundamentals'},
        {'name': 'Maree', 'age': 21, 'course': 'JavaScript Essentials'},
    ]
    return render(request, 'students/student_list.html', {'students': students})