import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as PublicSharedModule } from 'src/app/public/shared/shared.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PublicSharedModule
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class ErrorPagesModule { }
