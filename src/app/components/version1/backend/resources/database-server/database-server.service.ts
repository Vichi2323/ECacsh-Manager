import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseServer } from '../../../models/database-server-model';
import { DatabaseMapper } from './database-server-mapper.service';
import { ApiService } from '../api-service';
import { map } from "rxjs/operators";

const resourceId = 'dbServer';

@Injectable({
    providedIn: 'root'
})
export class DatabaseServerService {
    constructor(private mapper: DatabaseMapper, private apiService: ApiService) { }


    getAll(): Observable<DatabaseServer[]> {
        return this.apiService.get(resourceId).pipe(map((res) => this.mapper.mapGetAllIdentityUsers(res)));
    }
    get(id: any): Observable<DatabaseServer> {
        return this.apiService.get(resourceId + '/' + id).pipe(map((res) => this.mapper.mapGetDatabaseServer(res)));
    }
    create(data: any): Observable<DatabaseServer> {
        var request = this.mapper.mapPostDatabaseServer(data);
        return this.apiService.post(resourceId, request);
    }
    update(id: any, data: any): Observable<DatabaseServer> {
        return this.apiService.patch(resourceId + '/' + id, data);
    }
    delete(id: any): Observable<DatabaseServer> {
        return this.apiService.delete(resourceId + '/' + id);
    }
    disableUser(id: any): Observable<any> {
        return this.apiService.post(resourceId + '/' + id + '/disable', {});
    }
    enableUser(id: any): Observable<any> {
        return this.apiService.post(resourceId + '/' + id + '/enable', {});
    }

}