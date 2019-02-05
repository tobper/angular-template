import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ApiInterceptorService } from './api-interceptor.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers:
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ApiInterceptorService,
        multi: true
      },
    ]
})
export class ApiModule { }
