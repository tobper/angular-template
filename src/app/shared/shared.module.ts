import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations:
    [
    ],
  imports:
    [
      /* angular stuff */
      CommonModule,
      FormsModule,
      RouterModule,

      /* 3rd party components */

      /* App modules */
    ],
  exports:
    [
      /* angular stuff */
      CommonModule,
      FormsModule,
      RouterModule,

      /* 3rd party components */

      /* App components */
    ]
})
export class SharedModule { }
