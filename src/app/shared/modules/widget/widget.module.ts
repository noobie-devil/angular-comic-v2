import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWrapperWidgetComponent } from './components/section-wrapper-widget/section-wrapper-widget.component';



@NgModule({
  declarations: [
    SectionWrapperWidgetComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SectionWrapperWidgetComponent
  ]
})
export class WidgetModule { }
