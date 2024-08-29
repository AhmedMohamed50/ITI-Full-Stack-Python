from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def course_list(request):
    courses = [
        {'title': 'Python Basics', 'description': 'Learn the basics of Python programming.'},
        {'title': 'Django Fundamentals', 'description': 'Introduction to Django and web development.'},
        {'title': 'JavaScript Essentials', 'description': 'Master the fundamentals of JavaScript.'},
    ]
    return render(request, 'courses/course_list.html', {'courses': courses})

def course_detail(request, course_id):
    course = {'title': 'Python Basics', 'description': 'Learn the basics of Python programming.'}
    return render(request, 'courses/course_detail.html', {'course': course})

def members(request):
    return HttpResponse("Hello world!")