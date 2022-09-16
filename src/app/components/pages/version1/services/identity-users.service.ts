import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdentityUser } from '../models/identity-user-model';


const baseUrl = 'https://dev-manager-api.ecashcloud.com/api/identityUser';

@Injectable({
    providedIn: 'root'
})
export class identityUserService {
    constructor(private http: HttpClient) { }


    getAll(): Observable<IdentityUser[]> {
        return this.http.get<IdentityUser[]>(baseUrl);
    }
    get(id: any): Observable<IdentityUser> {
        return this.http.get(`${baseUrl}/${id}`);
    }
    create(data: any): Observable<any> {
        return this.http.post<IdentityUser>(baseUrl, data);
    }
    update(id: any, data: any): Observable<any> {
        return this.http.put(`${baseUrl}/${id}`, data);
    }
    delete(id: any): Observable<any> {
        return this.http.delete(`${baseUrl}/${id}`);
    }
    disableUser(id: any): Observable<any> {
        return this.http.post(`${baseUrl}/${id}/disable`, {});
    }
    enableUser(id: any): Observable<any> {
        return this.http.post(`${baseUrl}/${id}/enable`, {});
    }

}