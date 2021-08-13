import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilsService } from './utils.service';
@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private utils: UtilsService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = JSON.stringify(localStorage.getItem('token'));
    if (authToken) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', authToken),
      });
      return this.handleRequest(authReq,next)

    } else {
      return this.handleRequest(request,next)
    }

  }

  handleRequest(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.utils.showErrorAlert();
        return throwError(error);
      })
    );
  }
}
