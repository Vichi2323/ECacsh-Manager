import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdentityUser } from '../../../models/identity-user-model';
import { IdentityUserMapper } from './identity-user-mapper.service';
import { ApiService } from '../../../../api-service';
import { map } from "rxjs/operators";

const resourceId = 'identityUser';

@Injectable({
    providedIn: 'root'
})
export class IdentityUserService {
    constructor(private mapper: IdentityUserMapper, private apiService: ApiService) { }


    getAll(): Observable<IdentityUser[]> {
        return this.apiService.get(resourceId).pipe(map((res) => this.mapper.mapGetAllIdentityUsers(res)));
    }
    get(id: any): Observable<IdentityUser> {
        return this.apiService.get(resourceId + '/' + id).pipe(map((res) => this.mapper.mapGetIdentityUser(res)));
    }
    create(data: any): Observable<IdentityUser> {
        var request = this.mapper.mapPostIdentityUser(data);
        return this.apiService.post(resourceId, request);
    }
    update(id: any, data: any): Observable<IdentityUser> {
        return this.apiService.patch(resourceId + '/' + id, data);
    }
    delete(id: any): Observable<IdentityUser> {
        return this.apiService.delete(resourceId + '/' + id);
    }
    disableUser(id: any): Observable<any> {
        return this.apiService.post(resourceId + '/' + id + '/disable', {});
    }
    enableUser(id: any): Observable<any> {
        return this.apiService.post(resourceId + '/' + id + '/enable', {});
    }

}