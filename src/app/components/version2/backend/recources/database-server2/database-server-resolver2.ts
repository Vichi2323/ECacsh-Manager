import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { DatabaseServer2 } from '../../../models2/database-server-model2';
import { ErrorTracker2 } from '../../../models2/errorTracker2';
import { DatabaseServerService2 } from './database-server2.service';

@Injectable({ providedIn: 'root' })
export class DatabaseServerResolver2 implements Resolve<DatabaseServer2[] | ErrorTracker2> {
    constructor(private dbServerService2: DatabaseServerService2) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DatabaseServer2[] | ErrorTracker2> {
        return this.dbServerService2.getAll()
            .pipe(
                catchError(err => of(err))
            )
    }
} 