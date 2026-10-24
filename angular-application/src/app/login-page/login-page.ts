import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
  username = '';
  password = '';

  onLogin() {
    console.log('Login attempted:', this.username, this.password);
  }
}
