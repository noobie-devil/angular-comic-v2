import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { DetailsComicModule } from './details-comic/details-comic.module';
import { ReadingComicModule } from 'src/app/public/reading-comic/reading-comic.module';
import { HeaderModule } from 'src/app/shared/modules/header/header.module';
import { ErrorPagesModule } from 'src/app/public/error-pages/error-pages.module';

import { DetailsComicComponent } from 'src/app/public/details-comic/components/details-comic/details-comic.component';
import { ReadingComicComponent } from 'src/app/public/reading-comic/components/reading-comic/reading-comic.component';
import { PageNotFoundComponent } from 'src/app/public/error-pages/components/page-not-found/page-not-found.component';

const routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => HomeModule
      }
    ]
  },
  {
    path: 'title',
    pathMath: 'full',
    children: [
      {
        path: ':comicSeoAlias',
        component: DetailsComicComponent
      },
      {
        path: ':comicSeoAlias/:chapterComicSeoAlias',
        component: ReadingComicComponent
      },
      {
        path: '',
        component: PageNotFoundComponent
      }
    ],
  },
  
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HomeModule,
    DetailsComicModule,
    ReadingComicModule,
    ErrorPagesModule
  ]
})
export class PublicModule { }
