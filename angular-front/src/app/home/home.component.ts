import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userName: string = '';

  constructor(private router: Router) {}

  navigateToTodoApp(): void {
    if (this.userName.trim()) {
      this.router.navigate(['/todo-app']);
    } else {
      alert('Please enter your name.');
    }
  }
}
