import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../core/modules-primeng/primeng-modules.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthRepository } from './domain/repositories/auth.repository';
import { LoginUseCase } from './domain/usecases/login.usecase';
import { LogoutUseCase } from './domain/usecases/logout.usecase';
import { AuthImplementationRepository } from './infraestructure/repositories/auth.repository.impl';
import { LoginComponent } from './presentation/components/login/login.component';
import { AuthenticationComponent } from './presentation/pages/authentication/authentication.component';


const loginUseCaseFactory = (authRepo: AuthRepository) => new LoginUseCase(authRepo);
export const loginUseCaseProvider = {
  provide: LoginUseCase,
  useFactory: loginUseCaseFactory,
  deps: [AuthRepository]
}

const logoutUseCaseFactory = (authRepo: AuthRepository) => new LogoutUseCase(authRepo);
export const logoutUseCaseProvider = {
  provide: LogoutUseCase,
  useFactory: logoutUseCaseFactory,
  deps: [AuthRepository]
}


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
  providers: [
    loginUseCaseProvider,
    logoutUseCaseProvider,
    { provide: AuthRepository, useClass: AuthImplementationRepository }
  ],
})
export class AuthModule { }
