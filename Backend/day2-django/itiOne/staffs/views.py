from django.shortcuts import render

# Create your views here.

def staff_list(request):
    staffs = [
        {'name': 'Prof. Abdallah', 'department': 'Computer Science'},
        {'name': 'Dr. Amr', 'department': 'Mathematics'},
        {'name': 'Mr. Mahmoud', 'department': 'Physics'},
    ]
    return render(request, 'staffs/staff_list.html', {'staffs': staffs})