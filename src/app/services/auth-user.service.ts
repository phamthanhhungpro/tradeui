import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { objectToQueryString } from './queryStringHelper';

const baseUrl = environment.apiUrl + 'User';
@Injectable({
  providedIn: 'root'
})

export class AuthUserService {
  constructor(private http: HttpClient) { }


  createUser(user: any): Observable<any> {
    return this.http.post(`${baseUrl}/register`, user);
  }

  getPagingUser(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/paging`, data);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
