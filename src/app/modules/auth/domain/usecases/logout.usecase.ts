import { UseCase } from 'src/app/core/models/interfaces/usecase.interface';
import { AuthRepository } from '../repositories/auth.repository';



export class LogoutUseCase implements UseCase<void, void> {

  constructor(
    private readonly authRepository: AuthRepository,
  ) { }

  execute(): void {
    return this.authRepository.logout();
  }
}