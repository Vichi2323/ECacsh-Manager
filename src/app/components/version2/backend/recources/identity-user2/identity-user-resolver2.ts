import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorTracker2 } from '../../../models2/errorTracker2';
import { IdentityUser2 } from '../../../models2/identity-user-model2';
import { IdentityUserService2 } from './identity-user2.service';

@Injectable({ providedIn: 'root' })
export class IdentityUserResolver2 implements Resolve<IdentityUser2[] | ErrorTracker2> {
    constructor(private IdentityUserService2: IdentityUserService2) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IdentityUser2[] | ErrorTracker2> {
        return this.IdentityUserService2.getAll()
            .pipe(
                catchError(err => of(err))
            )
    }
} 