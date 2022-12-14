import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ConvertsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let msgString;
    return next.handle(request).pipe(
      tap((response) => {
        if(response instanceof HttpResponse && request.method=='GET'){
          // console.log(request.method=='GET');
          console.log(response.body);
          msgString=JSON.stringify(response.body);
          console.log(msgString);
      }})
    )
  }
}
