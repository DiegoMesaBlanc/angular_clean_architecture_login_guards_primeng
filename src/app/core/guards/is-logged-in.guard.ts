import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './../../shared/services/auth.service';



/* ***************************************************************** */
/* ************************** CanActivate ************************** */
/* ***************************************************************** */
export const IsLoggedInGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> => {
  const authSrv = inject(AuthService);
  const router = inject(Router);

  return authSrv.isLoggedIn$.pipe(
    map((isLoggedIn) => isLoggedIn || router.createUrlTree(['/autenticacion']))
  );
};










/* ********************************************************************************* */
/* ********************************************************************************* */
export const IsLoggedInGuardChild: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => false;