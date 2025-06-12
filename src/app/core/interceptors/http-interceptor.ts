import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        // Clone the request to add the new header.
        const clonedRequest = request.clone({
        headers: request.headers.set('Custom-Header', 'CustomHeaderValue')
        });
    
        // Handle the request and catch errors.
        return next.handle(clonedRequest).pipe(
        catchError((error: HttpErrorResponse) => {
            // Handle the error here
            console.error('HTTP Error:', error);
            return throwError(() => new Error('An error occurred while processing the request.'));
        })
        );
    }
    }
