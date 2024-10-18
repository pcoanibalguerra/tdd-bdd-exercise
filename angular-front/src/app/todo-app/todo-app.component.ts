import { NgIf, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



interface Task {
  title: string;
  description?: string;
  completed: boolean;
  state: 'pending' | 'completed';
}


@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [NgIf, CommonModule, FormsModule],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css'
})
export class TodoAppComponent implements OnInit {
  userName: string = '';
  newTaskTitle: string = '';
  newTaskDescription: string = '';
  tasks: Task[] = [];
  showError: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      console.log("user name ", params['name'] || 'User'); 
      this.userName = params['name'] || 'User';
    });
  }

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        title: this.newTaskTitle,
        description: this.newTaskDescription,
        completed: false,
        state: 'pending',
      };
      this.tasks.push(newTask);
      this.resetForm();
      this.showError = false;
    } else {
      this.showError = true;
    }
  }

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
    task.state = task.completed ? 'completed' : 'pending';
  }

  private resetForm(): void {
    this.newTaskTitle = '';
    this.newTaskDescription = '';
  }

  getPendingTasksCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
