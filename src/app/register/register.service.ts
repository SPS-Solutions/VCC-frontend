import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private ROOT_URL = "http://localhost:4000/api/user";
  constructor(private http: HttpClient) { }

  register(user: any){
    return this.http.post<any>(`${this.ROOT_URL}/register`, user);
  }
}
