import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class LOGSInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var start = performance.now(); 
    var startdate=new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear();
    console.log(startdate);

return next
  .handle(request)
  .pipe(res => {
    // console.log(performance.now());
    console.log('took ' + (performance.now()) + 'ms');
    var resdate=new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear();
    console.log(resdate);
    return res;
  });

  }
}
