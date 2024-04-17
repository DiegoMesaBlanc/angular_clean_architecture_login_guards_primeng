import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UserWithToken } from 'src/app/modules/back-office/users/domain/models/user-response.model';
import { AuthModel } from '../../domain/models/auth.model';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { AuthService } from './../../../../shared/services/auth.service';
import { NotificationService } from './../../../../shared/services/notification.service';


const USER_LOCAL_STORAGE_KEY = 'userData';


@Injectable({
  providedIn: 'root'
})


export class AuthImplementationRepository extends AuthRepository {
  URI = 'https://api.dropi.co/api/login';

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly alertSrv: NotificationService,
    private readonly authSrv: AuthService
  ) {
    super();
    this.loadUserFromLocalStorage();
  }

  login(params: AuthModel): Observable<void> {
    const payloadAuth = {
      email: params.email,
      password: params.password,
      white_brand_id: 'df3e6b0bb66ceaadca4f84cbc371fd66e04d20fe51fc414da8d1b84d31d178de'
    }

    return this.http.post(this.URI, payloadAuth)
      .pipe(
        tap((res: any) => res),
        tap(({ status, message }) => {
          if (status != 200) throw this.alertSrv.warn('Invalido:', message);
        }),
        tap(({ token }) => this.saveTokenToLocalStore({ token: token, role: 'Inventory', username: 'Alice' })),
        tap(() => this.redirectToPrincipalPage()),
      )
  }

  logout(): void {
    this.removeFromLocalStorage();
    this.authSrv.user.next(null);
    this.router.navigateByUrl('/autenticacion');
  }


  private saveTokenToLocalStore(userToken: UserWithToken): void {
    this.pushNewUser(userToken);
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(userToken));
  }

  private pushNewUser(userToken: UserWithToken) {
    this.authSrv.user.next(userToken);
  }

  private redirectToPrincipalPage(): void {
    this.router.navigateByUrl('/usuarios');
  }

  private removeFromLocalStorage(): void {
    localStorage.clear()
  }

  private loadUserFromLocalStorage(): void {
    const userFromLocal = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

    userFromLocal && this.pushNewUser(JSON.parse(userFromLocal));
  }
}