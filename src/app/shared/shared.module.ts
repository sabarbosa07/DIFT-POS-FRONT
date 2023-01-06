import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { PrimengModule } from 'src/app/common/primeng.module';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    MenuComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
