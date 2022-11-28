import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../api-service';
import { map } from "rxjs/operators";
import { DatabaseServer2 } from '../../../models2/database-server-model2';
import { DatabaseMapper2 } from './database-server-mapper2.service';

const resourceId = 'dbServer';

@Injectable({
    providedIn: 'root'
})
export class DatabaseServerService2 {
    constructor(private mapper: DatabaseMapper2, private apiService: ApiService) { }


    getAll(): Observable<DatabaseServer2[]> {
        return this.apiService.get(resourceId).pipe(map((res) => this.mapper.mapGetAllIdentityUsers(res)));
    }
    get(id: any): Observable<DatabaseServer2> {
        return this.apiService.get(resourceId + '/' + id).pipe(map((res) => this.mapper.mapGetDatabaseServer(res)));
    }
    create(data: any): Observable<DatabaseServer2> {
        var request = this.mapper.mapPostDatabaseServer(data);
        return this.apiService.post(resourceId, request);
    }
    update(id: any, data: any): Observable<DatabaseServer2> {
        return this.apiService.patch(resourceId + '/' + id, data);
    }
    delete(id: any): Observable<DatabaseServer2> {
        return this.apiService.delete(resourceId + '/' + id);
    }
    makeDefault(id: any): Observable<any> {
        return this.apiService.post(resourceId + '/' + id + '/makeDefault', {});
    }

}