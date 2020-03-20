import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { finalize, delay } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('laoder interceptor call');
    this.loaderService.show();
    return next.handle(request).pipe(
      delay(500), // dura sempre almeno 500 ms
      finalize(() => this.loaderService.hide())
    );
  }

} // end class
