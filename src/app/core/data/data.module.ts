import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LayoutService } from './layout.service';
import { UserService } from './user.service';


const SERVICES = [
  LayoutService,
  UserService,
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
