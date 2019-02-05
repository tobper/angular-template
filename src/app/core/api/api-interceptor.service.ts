import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '@env/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor
{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    const apiReq = req.clone({ url: `${environment.apiBaseUrl}/${req.url}` })
    return next.handle(apiReq)
  }
}
