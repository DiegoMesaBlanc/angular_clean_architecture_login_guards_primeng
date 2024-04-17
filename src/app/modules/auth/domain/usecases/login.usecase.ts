import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/models/interfaces/usecase.interface';
import { AuthModel } from '../models/auth.model';
import { AuthRepository } from '../repositories/auth.repository';



export class LoginUseCase implements UseCase<AuthModel, void> {

  constructor(
    private readonly aurhRepository: AuthRepository,
  ) { }

  execute(params: AuthModel): Observable<void> {
    return this.aurhRepository.login(params)
  }
}