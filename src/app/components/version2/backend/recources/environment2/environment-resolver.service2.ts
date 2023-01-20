import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Environment2 } from '../../../models2/environment-model2';
import { ErrorTracker2 } from '../../../models2/errorTracker2';
import { EnvironmentService2 } from './environment-service2';

@Injectable({ providedIn: 'root' })
export class EnvironmnetResolver2 implements Resolve<Environment2[] | ErrorTracker2> {
    constructor(private EnvironmentService2: EnvironmentService2) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Environment2[] | ErrorTracker2> {
        return this.EnvironmentService2.getAll()
            .pipe(
                catchError(err => of(err))
            )
    }
} 