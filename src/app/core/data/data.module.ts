import { NgModule, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LayoutService } from './layout.service';

const SERVICES = [
  LayoutService
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    ...SERVICES
  ]
})
export class DataModule {
  static forRoot():ModuleWithProviders{
    return<ModuleWithProviders>{
      ngModule:DataModule,
      providers: [
        ...SERVICES
      ]
    }
  }
 }
