
def add_task():
    # get task from user
    # define status
    # add task to the list of tasks
    
    task = input("Enter new task: ")
    tasks.append(task)
    print(tasks)

def mark_task_complete():
    pass

def view_tasks():
    ...

message = """1 - add task to list
2 - mark task as complete
3 - view tasks
4 - Quit"""

tasks = []

while True:
    print(message)
    choice = input("Enter your choice: ")

    if choice == "1":
        add_task()
    elif choice == "2":
        mark_task_complete()
    elif choice == "3":
        view_tasks()
    elif choice == "4":
        break
    else:
        print("Invalid choice, please enter a number between 1 and 4.")