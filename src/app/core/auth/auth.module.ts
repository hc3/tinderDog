import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const SERVICES = [
  AuthService,
  AuthGuard
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ...SERVICES
  ]
})
export class AuthModule { 
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: AuthModule,
      providers: [
        ...SERVICES
      ]
    }
  }
}
