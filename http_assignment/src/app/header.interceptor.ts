import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { observable, Observable, tap } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((response) => {
        if(request.method=='POST'){
          // console.log(request.method=='GET');
          request=request.clone({
            setHeaders: {
              context: "IMPACT Angular Assignments" 
            }
        })
      }})
    )
  }
    
  }


