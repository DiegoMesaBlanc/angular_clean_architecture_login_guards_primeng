import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/modules/back-office/users/domain/models/user.model';
import { UserAllUseCase } from '../../../domain/usecases/user-all.usecase';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UserModel[] = [];

  constructor(
    private readonly userAllUseCase: UserAllUseCase
  ) { }

  ngOnInit(): void {
    this.userAllUseCase.execute().subscribe((res: UserModel[]) => {
      this.users = res;

      console.log(this.users);

    });
  }

}
