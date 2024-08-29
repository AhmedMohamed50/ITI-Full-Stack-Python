from django.shortcuts import render

# Create your views here.
def student_list(request):
    students = [
        {'name': 'Alice', 'age': 20, 'course': 'Python Basics'},
        {'name': 'Bob', 'age': 22, 'course': 'Django Fundamentals'},
        {'name': 'Charlie', 'age': 21, 'course': 'JavaScript Essentials'},
    ]
    return render(request, 'students/student_list.html', {'students': students})