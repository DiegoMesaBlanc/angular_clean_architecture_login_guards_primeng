import { Observable } from 'rxjs';
import { UseCase } from '../../../../../core/models/interfaces/usecase.interface';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

export class UserAllUseCase implements UseCase<void, UserModel[]> {
  constructor(
    private readonly userRepository: UserRepository,
  ) { }


  execute(): Observable<UserModel[]> {
    return this.userRepository.allUsers();
  }
}