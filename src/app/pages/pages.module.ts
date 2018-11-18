import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { HomeModule } from './home/home.module';

const PAGES_COMPONENTS = [
  PagesComponent
]

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    HomeModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ]
})
export class PagesModule { }
