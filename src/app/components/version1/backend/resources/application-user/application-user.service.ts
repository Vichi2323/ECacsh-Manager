import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationUser } from '../../../models/application-users-model';
import { ApplicationUserMapper } from './application-user-mapper.service';
import { ApiService } from '../api-service';
import { map } from "rxjs/operators";

const resourceId = 'applicationUser'


const baseUrl = 'https://dev-manager-api.ecashcloud.com/api/applicationUser';

@Injectable({
    providedIn: 'root'
})
export class ApplicationUserService {
    constructor(private mapper: ApplicationUserMapper, private apiService: ApiService) { }


    getAll(): Observable<ApplicationUser[]> {
        return this.apiService.get(resourceId).pipe(map((res) => this.mapper.mapGetAllApplicationUsers(res)))
    }
    get(id: any): Observable<ApplicationUser> {
        return this.apiService.get(resourceId + '/' + id).pipe(map((res) => this.mapper.mapGetApplicationUser(res)));
    }
    create(data: any): Observable<ApplicationUser> {
        var request = this.mapper.mapPostApplicationUser(data)
        return this.apiService.post(resourceId, request)
    }

    update(id: any, data: any): Observable<ApplicationUser> {
        return this.apiService.patch(resourceId + '/' + id)
    }
    delete(id: any): Observable<ApplicationUser> {
        return this.apiService.delete(resourceId + '/' + id);
    }



}