import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { PrimengModule } from 'src/app/common/primeng.module';
// import { ToastModulePrimeng } from 'src/app/common/toast/toast.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryPageComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    // ToastModulePrimeng
  ]
})
export class CategoriesModule { }
