
def add_task():
    # get task from user
    task = input("Enter new task: ")
    # define status
    task_info = {"task": task, "completed" : False}
    # add task to the list of tasks
    tasks.append(task_info)
    # print(tasks)

# def mark_task_complete():
#     pass

def mark_task_complete():
    # get list of incomplete tasks
    # Method 1
    incomplete_tasks = [task for task in tasks if task["completed"] == False]

    # Method 2
    # incomplete_tasks = list(filter(lambda task: task["completed"] == False, tasks))

    # Method 3
    # incomplete_tasks = []
    # for task in tasks:
    # if task["completed"] == False:
    # incomplete_tasks.append(task)
    
    # Check if there are any incomplete tasks
    if not incomplete_tasks:
        print("All tasks are already completed.")
        print("-"*30)
        return
    
    # if len(incomplete_tasks) == 0:
    #     print("All tasks are already completed.")
    #     print("-"*30)
    #     return
    
    # show incomplete tasks
    for i, task in enumerate(incomplete_tasks):
        print(f"{i+1}- {task['task']}")
        print("-"*30)

    # get task number from user
    task_number = int(input("choose task to complete: "))
    
    # mark task as complete
    incomplete_tasks[task_number - 1]["completed"] = True
    print("task marked as complete")
    # print(tasks)
    # after change the list of incomplete_tasks to True the tasks list also changed because the two point to the same location in memory
    

def view_tasks():
    if not tasks: 
        print("no tasks to view")
        return

    for i, task in enumerate(tasks):
        status = "✔" if task["completed"] else "❌"
        
        # status = "✅" if task["completed"] else "❌"
        # if task["completed"]:
        #   status = "✅"
        # else:
        #   status = "❌"
        
        print(f"{i+1}. {task['task']} {status}")
        print('-'*30)


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