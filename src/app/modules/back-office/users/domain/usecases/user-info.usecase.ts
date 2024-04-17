import { Observable } from 'rxjs';
import { UseCase } from '../../../../../core/models/interfaces/usecase.interface';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';



export class UserInfoUseCase implements UseCase<Object, UserModel> {

  constructor(
    private readonly userRepository: UserRepository,
  ) { }


  execute(params: Object): Observable<UserModel> {
    return this.userRepository.user(params)
  }
}