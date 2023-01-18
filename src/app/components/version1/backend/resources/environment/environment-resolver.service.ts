import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Environment } from '../../../models/environment-model';
import { ErrorTracker } from '../../../models/errorTracker';
import { EnvironmentService } from './environment.service';

@Injectable({ providedIn: 'root' })
export class EnvironmnetResolver implements Resolve<Environment[] | ErrorTracker> {
    constructor(private EnvironmentService: EnvironmentService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Environment[] | ErrorTracker> {
        return this.EnvironmentService.getAll()
            .pipe(
                catchError(err => of(err))
            )
    }
} 