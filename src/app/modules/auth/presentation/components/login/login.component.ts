import { Component, OnInit } from '@angular/core';
import { AuthModel } from '../../../domain/models/auth.model';
import { LoginUseCase } from '../../../domain/usecases/login.usecase';
import { LogoutUseCase } from '../../../domain/usecases/logout.usecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: AuthModel = {} as AuthModel;
  loading: boolean = false;


  constructor(
    private readonly loginUseCase: LoginUseCase,
    private readonly logoutUseCase: LogoutUseCase,
  ) { }

  ngOnInit(): void {
    this.logoutUseCase.execute();
  }


  loginSubmit() {
    this.loading = true;

    this.loginUseCase.execute(this.user).subscribe({
      error: () => this.loading = false
    })
  }

}
