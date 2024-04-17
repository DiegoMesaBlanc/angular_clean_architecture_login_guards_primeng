import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HANDLE_REQUEST_PROVIDER } from './core/interceptors/handle-request.interceptor';
import { PrimengModule } from './core/modules-primeng/primeng-modules.module';
import { AuthRepository } from './modules/auth/domain/repositories/auth.repository';
import { LogoutUseCase } from './modules/auth/domain/usecases/logout.usecase';
import { AuthImplementationRepository } from './modules/auth/infraestructure/repositories/auth.repository.impl';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AllowedDirective } from './shared/directives/allowed.directive';


const logoutUseCaseFactory = (authRepo: AuthRepository) => new LogoutUseCase(authRepo);
export const logoutUseCaseProvider = {
  provide: LogoutUseCase,
  useFactory: logoutUseCaseFactory,
  deps: [AuthRepository]
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    AllowedDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimengModule,
  ],
  providers: [
    MessageService,
    logoutUseCaseProvider,
    HANDLE_REQUEST_PROVIDER,
    { provide: AuthRepository, useClass: AuthImplementationRepository }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
