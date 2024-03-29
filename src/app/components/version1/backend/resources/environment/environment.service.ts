import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../../models/environment-model';
import { EnvironmentMapper } from './environment-mapper';
import { ApiService } from '../../../../api-service';
import { map } from "rxjs/operators";

const resourceId = 'environment'

@Injectable({
    providedIn: 'root'
})
export class EnvironmentService {
    constructor(private mapper: EnvironmentMapper, private apiService: ApiService) { }


    getAll(): Observable<Environment[]> {
        return this.apiService.get(resourceId).pipe(map((res) => this.mapper.mapGetAllIEnvironments(res)));
    }
    get(id: any): Observable<Environment> {
        return this.apiService.get(resourceId + '/' + id).pipe(map((res) => this.mapper.mapGetEnvironment(res)));
    }
    create(data: any): Observable<Environment> {
        var request = this.mapper.mapPostEnvironment(data);
        return this.apiService.post(resourceId, request);
    }
    update(id: any, data: any): Observable<Environment> {
        return this.apiService.patch(resourceId + '/' + id, data);
    }
    delete(id: any): Observable<Environment> {
        return this.apiService.delete(resourceId + '/' + id);
    }
    assignUser(environmentId: any, userId: any): Observable<Environment> {
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


