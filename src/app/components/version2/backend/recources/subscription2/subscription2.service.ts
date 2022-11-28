import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../api-service';
import { map } from "rxjs/operators";
import { SubscriptionMapper2 } from './subscription-mapper2.service';
import { Subscription2 } from '../../../models2/subscruptions-model2';

const resourceId = 'environment'



@Injectable({
    providedIn: 'root'
})
export class SubscriptionService2 {
    constructor(private mapper: SubscriptionMapper2, private apiService: ApiService) { }


    getAll(): Observable<Subscription2[]> {
        return this.apiService.get(resourceId).pipe(map((res) => this.mapper.mapGetAllSubscriptions(res)))
    }
    get(id: any): Observable<Subscription2> {
        return this.apiService.get(resourceId + '/' + id).pipe(map((res) => this.mapper.mapGetSubscription(res)));
    }
    create(data: any): Observable<Subscription2> {
        var request = this.mapper.mapPostSubscription(data)
        return this.apiService.post(resourceId, request)
    }

    update(environmentId: any, data: any): Observable<Subscription2> {
        return this.apiService.patch(resourceId + '/' + environmentId + '/environmentSubscription', data)
    }
    delete(id: any): Observable<Subscription2> {
        return this.apiService.delete(resourceId + '/' + id);
    }



}