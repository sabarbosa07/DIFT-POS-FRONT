import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    ToastModule,
    RippleModule
  ],
  exports: [ToastComponent]
})
export class ToastModulePrimeng { }
