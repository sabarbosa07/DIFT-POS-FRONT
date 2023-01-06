import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { PrimengModule } from 'src/app/common/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { ToastModulePrimeng } from 'src/app/common/toast/toast.module';


@NgModule({
  declarations: [
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    // ToastModulePrimeng
  ]
})
export class AuthModule { }

