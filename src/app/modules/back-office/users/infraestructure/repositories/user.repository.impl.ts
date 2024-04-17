import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RequestEntity } from '../../../../../core/models/entities/request.entity';
import { UserEntity } from '../../domain/entities/user.entity';
import { UserModel } from '../../domain/models/user.model';
import { UserRepository } from '../../domain/repositories/user.repository';
import { UserImplementationRepositoryMapper } from '../mappers/user.mapper';


@Injectable({
  providedIn: 'root'
})


export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();
  URI = 'https://reqres.in/api/users';

  constructor(
    private readonly http: HttpClient
  ) {

    super();
  }


  allUsers(): Observable<UserModel[]> {
    return this.http.get<RequestEntity>(this.URI)
      .pipe(
        map((res: RequestEntity) => res.data),
        map((data: UserEntity[]) => data.map(this.userMapper.mapFrom))
      );
  }

  user(params: { id: string }): Observable<UserModel> {
    return this.http.get<UserEntity>(this.URI + `/${params.id}`)
      .pipe(map(this.userMapper.mapFrom))
  }

  updateUser(params: Object): Observable<UserModel> {
    throw new Error('Method not implemented.');
  }
}