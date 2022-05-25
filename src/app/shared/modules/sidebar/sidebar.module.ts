import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SignInAdvertiseComponent } from './components/sign-in-advertise/sign-in-advertise.component';
import { SidebarCategoryComponent } from './components/sidebar-category/sidebar-category.component';
import { CategoryService } from './services/category.service';
import { GetCategoriesEffect } from 'src/app/shared/modules/sidebar/store/effects/getCategories.effect';
import { reducers } from './store/category.reducers';


@NgModule({
  declarations: [
    SignInAdvertiseComponent,
    SidebarCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('categories', reducers),
    EffectsModule.forFeature([GetCategoriesEffect]),
  ],
  exports: [
    SignInAdvertiseComponent,
    SidebarCategoryComponent
  ],
  providers: [
    CategoryService
  ]
})
export class SidebarModule { }
