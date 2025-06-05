import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private router: Router) {}

  isLoginMode = true;

  loginFormData = {
    email: '',
    password: ''
  };

  signupFormData = {
    username: '',
    email: '',
    password: ''
  };

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSignup() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const alreadyExists = users.find((user: any) => user.email === this.signupFormData.email);
    if (alreadyExists) {
      alert('⚠️ This email is already registered.');
      return;
    }

    users.push({ ...this.signupFormData });
    localStorage.setItem('users', JSON.stringify(users));

    alert('🎉 Sign-up successful! Welcome aboard! 🥳');
    this.toggleMode(); // Switch to login form
  }

  onLogin() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const found = users.find((user: any) =>
      user.email === this.loginFormData.email && user.password === this.loginFormData.password
    );

    if (found) {
      sessionStorage.setItem('currentUser', JSON.stringify(found));
      alert('🎊 Login successful! Welcome back.');
      this.router.navigate(['/books']);
    } else {
      alert(' Incorrect email or password.');
    }
  }
}
