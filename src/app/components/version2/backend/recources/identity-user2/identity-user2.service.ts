import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { ApiService } from 'src/app/components/api-service';
import { IdentityUser2 } from '../../../models2/identity-user-model2';
import { IdentityUserMapper2 } from './identity-user-mapper2.service';

const resourceId = 'identityUser';

@Injectable({
    providedIn: 'root'
})
export class IdentityUserService2 {
    constructor(private mapper: IdentityUserMapper2, private apiService: ApiService) { }


    getAll(): Observable<IdentityUser2[]> {
        return this.apiService.get(resourceId).pipe(map((res) => this.mapper.mapGetAllIdentityUsers(res)));
    }
    get(id: any): Observable<IdentityUser2> {
        return this.apiService.get(resourceId + '/' + id).pipe(map((res) => this.mapper.mapGetIdentityUser(res)));
    }
    create(data: any): Observable<IdentityUser2> {
        var request = this.mapper.mapPostIdentityUser(data);
        return this.apiService.post(resourceId, request);
    }
    update(id: any, data: any): Observable<IdentityUser2> {
        return this.apiService.patch(resourceId + '/' + id, data);
    }
    delete(id: any): Observable<IdentityUser2> {
        return this.apiService.delete(resourceId + '/' + id);
    }
    disableUser(id: any): Observable<any> {
        return this.apiService.post(resourceId + '/' + id + '/disable', {});
    }
    enableUser(id: any): Observable<any> {
        return this.apiService.post(resourceId + '/' + id + '/enable', {});
    }

}