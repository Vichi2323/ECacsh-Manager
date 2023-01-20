import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../api-service';
import { map } from "rxjs/operators";
import { EnvironmentMapper2 } from './environment-mapper2';
import { Environment2 } from '../../../models2/environment-model2';

const resourceId = 'environment'

@Injectable({
    providedIn: 'root'
})
export class EnvironmentService2 {
    constructor(private mapper: EnvironmentMapper2, private apiService: ApiService) { }


    getAll(): Observable<Environment2[]> {
        return this.apiService.get(resourceId).pipe(map((res) => this.mapper.mapGetAllIEnvironments(res)));
    }
    get(id: any): Observable<Environment2> {
        return this.apiService.get(resourceId + '/' + id).pipe(map((res) => this.mapper.mapGetEnvironment(res)));
    }
    create(data: any): Observable<Environment2> {
        var request = this.mapper.mapPostEnvironment(data);
        return this.apiService.post(resourceId, request);
    }
    update(id: any, data: any): Observable<Environment2> {
        return this.apiService.patch(resourceId + '/' + id, data);
    }
    delete(id: any): Observable<Environment2> {
        return this.apiService.delete(resourceId + '/' + id);
    }
    assignUser(environmentId: any, userId: any): Observable<Environment2> {
        return this.apiService.post(`${resourceId}/${environmentId}/applicationUser/${userId}/assign`);
    }
    addEnvironmentSubscription(environmentId: any, data: any) {
        let request = this.mapper.mapAddEnvironmentSubscription(data);
        return this.apiService.post(resourceId + '/' + environmentId + '/environmentSubscription', request);
    }
    assignDbServerToEnvironment(environmentId: any, dbSErverId: any) {
        return this.apiService.post(resourceId + '/' + environmentId + '/dbServer/' + dbSErverId)
    }
    importEnvironmet(data: any) {
        var request = this.mapper.mapImportEnvironment(data);
        return this.apiService.post(resourceId + '/import', request)
    }
}


