import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/identityUserModel/model';
const baseUrl = 'http://localhost:3000/identityUsers';

@Injectable({
  providedIn: 'root'
})
export class IdentityUserServiceV2 {
  constructor(private http: HttpClient) { }


  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(baseUrl);
  }
  get(id: any): Observable<IUser> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post<IUser>(baseUrl, data);
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