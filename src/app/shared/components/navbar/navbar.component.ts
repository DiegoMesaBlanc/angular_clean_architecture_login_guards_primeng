import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { combineLatest, map } from 'rxjs';
import { LogoutUseCase } from 'src/app/modules/auth/domain/usecases/logout.usecase';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;


  constructor(
    private readonly logoutUseCase: LogoutUseCase,
    public readonly authServ: AuthService,
  ) {

  }

  ngOnInit() {
    combineLatest([
      this.useRoleIn(['Inventory', 'Manager']),
      this.useRoleIn(['Orders', 'Manager']),
      this.useRoleIn(['Accounting', 'Manager']),
    ]).subscribe(res => {
      this.items = [
        {
          label: 'Pedidos',
          icon: 'pi pi-fw pi-power-off',
          routerLink: '/usuarios',
          visible: res[0],
        },
        {
          label: 'Inventario',
          icon: 'pi pi-fw pi-power-off',
          routerLink: '/usuarios/man-city',
          visible: res[1],
        },
        {
          label: 'Contabilidad',
          icon: 'pi pi-fw pi-power-off',
          routerLink: '/usuarios/real-madrid',
          visible: res[2],
        },
      ];
    })
  }

  logOut() {
    this.logoutUseCase.execute();
  }

  useRoleIn(roles: any[]) {
    return this.authServ.user$.pipe(
      map((user) => Boolean(user && roles.includes(user.role))),
    )
  }

}
