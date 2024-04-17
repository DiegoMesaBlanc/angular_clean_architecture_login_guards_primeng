import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { NotificationService } from './../../shared/services/notification.service';

@Injectable()
export class HandleRequestInterceptor implements HttpInterceptor {

  constructor(
    private readonly alertSrv: NotificationService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        this.alertSrv.error('Error:', err.message);

        // if (error.status === 500) {
        //   return Observable.throw(new Error(error.status));
        // }
        // else if (error.status === 400) {
        //   return Observable.throw(new Error(error.status));
        // }
        // else if (error.status === 409) {
        //   return Observable.throw(new Error(error.status));
        // }
        // else if (error.status === 406) {
        //   return Observable.throw(new Error(error.status));
        // }

        return throwError(() => err);
      })
    );
  }
}


export const HANDLE_REQUEST_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: HandleRequestInterceptor,
  multi: true,
};
