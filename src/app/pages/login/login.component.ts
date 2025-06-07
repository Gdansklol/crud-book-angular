import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faUser = faUser;
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;

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

  constructor(private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSignup() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.find((u: any) => u.email === this.signupFormData.email);

    if (exists) {
      alert('⚠️ This email is already registered.');
      return;
    }

    users.push({ ...this.signupFormData });
    localStorage.setItem('users', JSON.stringify(users));
    alert('🎉 Sign-up successful!');
    this.toggleMode();
  }

  onLogin() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find((u: any) =>
      u.email === this.loginFormData.email && u.password === this.loginFormData.password
    );

    if (found) {
      sessionStorage.setItem('currentUser', JSON.stringify(found));
      alert('🎊 Login successful!');
      this.router.navigate(['/books']);
    } else {
      alert(' Incorrect email or password.');
    }
  }
}
