import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserOperationService {

  SERVER_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getUsers(data) {
       return this.http.get(this.SERVER_URL + 'userData');
  }
  getUser(userId) {
       return this.http.get(`${this.SERVER_URL + 'userData'}/${userId}`);
  }
  createUser(id: number, name: string, age: number, isActive: boolean) {
      console.log('create user');
      return this.http.post(`${this.SERVER_URL + 'userData'}`, {'id': id, 'name': name, 'age': age, 'isActive': isActive});
  }

  deleteUser(userId) {
      return this.http.delete(`${this.SERVER_URL + 'userData'}/${userId}`);
  }
  updateUser(id: number, name: string, age: number, isActive: boolean) {
      console.log('update user');
      return this.http.patch(`${this.SERVER_URL + 'userData'}/${id}`, {'id': id, 'name': name, 'age': age, 'isActive': isActive});
  }
}
