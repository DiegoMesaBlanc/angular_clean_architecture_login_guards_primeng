import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserInfoUseCase } from './domain/usecases/user-info.usecase';

import { PrimengModule } from '../../../core/modules-primeng/primeng-modules.module';
import { UserRepository } from './domain/repositories/user.repository';
import { UserAllUseCase } from './domain/usecases/user-all.usecase';
import { UserImplementationRepository } from './infraestructure/repositories/user.repository.impl';
import { SingleUserComponent } from './presentation/components/single-user/single-user.component';
import { UsersComponent } from './presentation/pages/users/users.component';
import { UsersRoutingModule } from './users-routing.module';


const userAllUseCaseFactory = (userRepo: UserRepository) => new UserAllUseCase(userRepo);
export const userAllUseCaseProvider = {
  provide: UserAllUseCase,
  useFactory: userAllUseCaseFactory,
  deps: [UserRepository]
}

const UserInfoUseCaseFactory = (userRepo: UserRepository) => new UserInfoUseCase(userRepo);
export const userInfoUseCaseProvider = {
  provide: UserInfoUseCase,
  useFactory: UserInfoUseCaseFactory,
  deps: [UserRepository]
}


@NgModule({
  declarations: [
    UsersComponent,
    SingleUserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PrimengModule,
  ],
  providers: [
    userAllUseCaseProvider,
    userInfoUseCaseProvider,
    { provide: UserRepository, useClass: UserImplementationRepository }
  ]
})
export class UsersModule { }
