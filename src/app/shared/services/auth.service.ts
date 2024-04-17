import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { UserWithToken } from '../../modules/back-office/users/domain/models/user-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<UserWithToken | null>(null);
  user$ = this.user.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(Boolean));

  constructor() { }

}
