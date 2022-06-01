import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  BadGatewayException,
  CallHandler,
  RequestTimeoutException,
} from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, map, tap, timeout } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('holiss', context);
    console.log('Before...');

    return next.handle().pipe(
      // timeout(5000),
      // catchError((err) => {
      //   if (err instanceof TimeoutError) {
      //     return throwError(() => new RequestTimeoutException());
      //   }
      //   return throwError(() => err);
      // }),
      // map(x => console.log(x))
      // catchError(err => throwError(() => new BadGatewayException())),
      // catchError(err => throwError(() => console.log(err))),

      // tap(() => console.log(`After... ${Date.now() - now}ms`)),
    );
  }
}
