import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule as PublicSharedModule } from 'src/app/public/shared/shared.module';
import { WidgetModule } from 'src/app/shared/modules/widget/widget.module';
import { SwiperModule } from 'src/app/shared/modules/swiper/swiper.module';
import { SidebarModule } from 'src/app/shared/modules/sidebar/sidebar.module';
import { ComicModule } from 'src/app/shared/modules/comic/comic.module';

import { HomeComponent } from './components/home/home.component';

const routes = [
  {
    path: '',
    component: HomeComponent,
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PublicSharedModule,
    WidgetModule,
    SwiperModule,
    SidebarModule,
    ComicModule,
  ]
})
export class HomeModule { }
