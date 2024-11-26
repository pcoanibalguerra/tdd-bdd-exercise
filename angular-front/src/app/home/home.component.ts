import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userName: string = '';
  showError: boolean = false;

  constructor(private router: Router) {}

  navigateToTodoApp(): void {
    if (this.userName.trim()) {
      this.showError = false;
      this.router.navigate(['/todo-app'], { queryParams: { name: this.userName }});
    } else {
      this.showError = true;
    }
  }
}
