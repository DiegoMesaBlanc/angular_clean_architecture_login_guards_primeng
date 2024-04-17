import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, distinctUntilChanged, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appAllowed]'
})
export class AllowedDirective implements OnInit, OnDestroy {
  @Input('appAllowed') allowedRoles?: any;

  private sub?: Subscription;

  permission: boolean = false;


  constructor(
    private readonly authServ: AuthService,
    // private readonly viewContainerRef: ViewContainerRef,
    // private readonly templateRef: TemplateRef<any>,
  ) { }


  ngOnInit(): void {
    this.sub = this.authServ.user$.pipe(
      map((user) => Boolean(user && this.allowedRoles?.includes(user.role))),
      distinctUntilChanged(),
      tap((hasRole) => this.permission = hasRole
        // ? this.viewContainerRef.createEmbeddedView(this.templateRef)
        // : this.viewContainerRef.clear()
      )
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
