import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module'
import { AppStoreModule } from './app-store.module'
import { CoreModule } from './core'

import { AppComponent } from './app.component'
import { environment } from '@env/environment'

@NgModule({
  declarations:
   [
    AppComponent
  ],
  imports:
   [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    CoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 40,
      logOnly: environment.production
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
