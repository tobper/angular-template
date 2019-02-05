import { NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '@app/shared'
import { ApiModule } from './api'

@NgModule({
  declarations:
    [
    ],
  imports:
    [
      CommonModule,
      SharedModule,
      ApiModule,
    ],
  exports:
    [
      SharedModule,
      ApiModule,
    ]
})
export class CoreModule
{
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  )
  {
    if (parentModule)
      throw new Error('CoreModule is already loaded. Import only in AppModule')
  }
}
