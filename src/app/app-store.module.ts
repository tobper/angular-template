import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store'

@NgModule({
  imports:
    [
      EffectsModule.forRoot([]),
      StoreModule.forRoot(
        {
          router: routerReducer
        }),
      StoreRouterConnectingModule.forRoot(),
    ]
})
export class AppStoreModule { }
