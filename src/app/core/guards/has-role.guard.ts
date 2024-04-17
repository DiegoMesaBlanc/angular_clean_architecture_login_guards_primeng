import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { Role } from '../../modules/back-office/users/domain/models/roles.type';
import { AuthService } from './../../shared/services/auth.service';



export const hasRole = (allowedRoles: Role[]) => {
  const authSrv = inject(AuthService);

  return () =>
    authSrv.user$.pipe(
      map((user) => Boolean(user && allowedRoles.includes(user.role!))),
      tap((hasRole) => hasRole === false && alert('Acceso Denegado'))
    );
}


/* ***************************************************************** */
/* ********************* CanActivate - CanLoad ********************* */
/* ***************************************************************** */
export const rolesGuard: CanActivateFn | CanMatchFn = (
  route: ActivatedRouteSnapshot | Route,
  state?: RouterStateSnapshot
): Observable<boolean> => {
  const authSrv = inject(AuthService);
  const router = inject(Router);

  const allowedRoles = route.data?.['allowedRoles'];

  return authSrv.user$.pipe(
    map((user) => Boolean(user && allowedRoles.includes(user.role))),
    tap((hasRole) => {
      if (hasRole === false) {
        router.createUrlTree(['/dashboard'])
      }
    })
  );
};
