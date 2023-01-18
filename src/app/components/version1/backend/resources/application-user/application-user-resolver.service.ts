import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ApplicationUser } from '../../../models/application-users-model';
import { ErrorTracker } from '../../../models/errorTracker';
import { ApplicationUserService } from './application-user.service';

@Injectable({ providedIn: 'root' })
export class ApplicationUserResolver implements Resolve<ApplicationUser[] | ErrorTracker> {
    constructor(private applicationUserService: ApplicationUserService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ApplicationUser[] | ErrorTracker> {
        return this.applicationUserService.getAll()
            .pipe(
                catchError(err => of(err))
            )
    }
} 