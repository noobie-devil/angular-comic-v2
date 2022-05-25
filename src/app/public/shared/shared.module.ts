import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardPageComponent } from './components/standard-page/standard-page.component';
import { HeaderModule } from 'src/app/shared/modules/header/header.module';


@NgModule({
  declarations: [
    StandardPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    StandardPageComponent
  ]
})
export class SharedModule { }
