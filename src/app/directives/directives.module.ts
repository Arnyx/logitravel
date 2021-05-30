import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FallbackImgDirective } from './fallback-img.directive';



@NgModule({
  declarations: [FallbackImgDirective],
  exports: [
    FallbackImgDirective
  ]
})
export class DirectivesModule { }
