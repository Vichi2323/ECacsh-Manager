import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubscriptionMapper } from './subscription.mapper.service';
import { ApiService } from '../api-service';
import { map } from "rxjs/operators";
import { Subscription } from '../../../models/subsciption-model';

const resourceId = 'environment'



@Injectable({
    providedIn: 'root'
})
export class SubscriptionService {
    constructor(private mapper: SubscriptionMapper, private apiService: ApiService) { }


    getAll(): Observable<Subscription[]> {
        return this.apiService.get(resourceId).pipe(map((res) => this.mapper.mapGetAllSubscriptions(res)))
    }
    get(id: any): Observable<Subscription> {
        return this.apiService.get(resourceId + '/' + id).pipe(map((res) => this.mapper.mapGetSubscription(res)));
    }
    create(data: any): Observable<Subscription> {
        var request = this.mapper.mapPostSubscription(data)
        return this.apiService.post(resourceId, request)
    }

    update(environmentId: any, data: any): Observable<Subscription> {
        return this.apiService.patch(resourceId + environmentId + '/environmentSubscription', data)
    }
    delete(id: any): Observable<Subscription> {
        return this.apiService.delete(resourceId + '/' + id);
    }



}