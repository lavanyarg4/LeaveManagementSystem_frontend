import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private loginService: LoginService) {}

  login(role: string) {
    this.loginService.login(role).subscribe(
      (response) => {
        // Handle successful login, navigate based on role
        console.log(`Logged in as: ${role}`);
        if (role === 'HR') {
          this.router.navigate(['/hr-dashboard']);
        } else if (role === 'Manager') {
          this.router.navigate(['/manager-dashboard']);
        } else if (role === 'Associate') {
          this.router.navigate(['/associate-dashboard']);
        }
      },
      (error) => {
        // Handle login error
        console.error('Login failed', error);
      }
    );
  }

}
