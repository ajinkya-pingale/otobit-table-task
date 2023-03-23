import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const token = this.authenticationService.getToken();
    const isLoggedIn = this.authenticationService.checkToken();
    if (isLoggedIn ) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(request).pipe(catchError(err => {
        if (err.status === 401) {
          this.authenticationService.logout();
        }
        if (err.status === 403) {
          this.authenticationService.logout();
        }
        const error = err.error.message || err.statusText;
        return throwError(err);
      }));
    }else{
      return next.handle(request);
    }


  }
}
