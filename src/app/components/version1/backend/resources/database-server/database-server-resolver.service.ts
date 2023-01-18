import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { DatabaseServer } from '../../../models/database-server-model';
import { ErrorTracker } from '../../../models/errorTracker';
import { DatabaseServerService } from './database-server.service';

@Injectable({ providedIn: 'root' })
export class DatabaseServerResolver implements Resolve<DatabaseServer[] | ErrorTracker> {
    constructor(private dbServerService: DatabaseServerService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DatabaseServer[] | ErrorTracker> {
        return this.dbServerService.getAll()
            .pipe(
                catchError(err => of(err))
            )
    }
} 