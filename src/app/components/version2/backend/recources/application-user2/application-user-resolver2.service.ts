import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ApplicationUser2 } from '../../../models2/application-users-model2';
import { ErrorTracker2 } from '../../../models2/errorTracker2';
import { ApplicationUserService2 } from './application-user2.service';

@Injectable({ providedIn: 'root' })
export class ApplicationUserResolver2 implements Resolve<ApplicationUser2[] | ErrorTracker2> {
    constructor(private applicationUserService2: ApplicationUserService2) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ApplicationUser2[] | ErrorTracker2> {
        return this.applicationUserService2.getAll()
            .pipe(
                catchError(err => of(err))
            )
    }
} 