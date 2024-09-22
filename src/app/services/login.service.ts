import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://your-api-url.com/login'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  login(role: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { role });
  }
}
