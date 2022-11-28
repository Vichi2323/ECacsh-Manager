import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { ApplicationUserMapper2 } from './application-user-mapper2.service';
import { ApplicationUser2 } from '../../../models2/application-users-model2';
import { ApiService } from 'src/app/components/api-service';

const resourceId = 'applicationUser'


const baseUrl = 'https://dev-manager-api.ecashcloud.com/api/applicationUser';

@Injectable({
    providedIn: 'root'
})
export class ApplicationUserService2 {
    constructor(private mapper: ApplicationUserMapper2, private apiService: ApiService) { }


    getAll(): Observable<ApplicationUser2[]> {
        return this.apiService.get(resourceId).pipe(map((res) => this.mapper.mapGetAllApplicationUsers(res)))
    }
    get(id: any): Observable<ApplicationUser2> {
        return this.apiService.get(resourceId + '/' + id).pipe(map((res) => this.mapper.mapGetApplicationUser(res)));
    }
    create(data: any): Observable<ApplicationUser2> {
        var request = this.mapper.mapPostApplicationUser(data)
        return this.apiService.post(resourceId, request)
    }

    update(id: any, data: any): Observable<ApplicationUser2> {
        return this.apiService.patch(resourceId + '/' + id)
    }
    delete(id: any): Observable<ApplicationUser2> {
        return this.apiService.delete(resourceId + '/' + id);
    }



}