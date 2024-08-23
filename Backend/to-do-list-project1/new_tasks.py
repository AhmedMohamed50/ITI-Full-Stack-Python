# import main                                 # method 1
# from main import view_tasks, add_task       # method 2
from main import *

new_tasks = [{"task":"Quran", "completed":True}, {"task":"Salah", "completed":True}, 
    {"task":"Study", "completed":False}, {"task":"Exercise", "completed":True}, 
    {"task":"Sleep", "completed":False}, {"task":"Visit Hamada", "completed":True}]

# main.view_tasks(new_tasks)                  # method 1
view_tasks(new_tasks)                         # method 2 and 3

print(__name__)