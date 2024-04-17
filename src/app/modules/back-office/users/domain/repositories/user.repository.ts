import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';



export abstract class UserRepository {
  abstract allUsers(): Observable<UserModel[]>;

  abstract user(params: { [key: string]: any }): Observable<UserModel>;

  abstract updateUser(params: Object): Observable<UserModel>;

}