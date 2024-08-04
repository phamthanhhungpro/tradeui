import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { objectToQueryString } from './queryStringHelper';

const baseUrl = environment.apiUrl + 'Category';
@Injectable({
    providedIn: 'root'
})

export class DanhMucService {
    constructor(private http: HttpClient) { }


    createDanhMuc(data: any): Observable<any> {
        return this.http.post(`${baseUrl}`, data);
    }

    getAllDanhMuc(): Observable<any> {
        return this.http.get(`${baseUrl}`);
    }

    getDanhMucById(id: any): Observable<any> {
        return this.http.get(`${baseUrl}/${id}`);
    }

    updateDanhMuc(id: any, data: any): Observable<any> {
        return this.http.put(`${baseUrl}/${id}`, data);
    }

    deleteDanhMuc(id: any): Observable<any> {
        return this.http.delete(`${baseUrl}/${id}`);
    }

    getPagingDanhMuc(data: any): Observable<any> {
        return this.http.post(`${baseUrl}/paging`, data);
    }
}
