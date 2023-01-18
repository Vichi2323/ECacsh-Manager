import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorTracker } from '../../../models/errorTracker';
import { IdentityUser } from '../../../models/identity-user-model';
import { IdentityUserService } from './identity-users.service';

@Injectable({ providedIn: 'root' })
export class IdentityUserResolver implements Resolve<IdentityUser[] | ErrorTracker> {
    constructor(private IdentityUserService: IdentityUserService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IdentityUser[] | ErrorTracker> {
        return this.IdentityUserService.getAll()
            .pipe(
                catchError(err => of(err))
            )
    }
} 