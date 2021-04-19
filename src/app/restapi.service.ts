import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

// login user data interface
interface User {
  name: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) {
  }


  public login(username: string, password: string) {
    // Headers that contains form fields data
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });

    // GET method to login, that returns an object {"name": "value", role: "value"}
    return this.http.get<User>('http://localhost:8080/user/getUserInfo', {headers, responseType: 'json'});
  }
}
