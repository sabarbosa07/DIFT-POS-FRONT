import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomErrorHandler } from '@core/errors/services/custom-error-handler.service';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';
import { SpinnerInterceptor } from '@core/interceptors/spinner-interceptor.interceptor';
import { SharedModule } from '@shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastModulePrimeng } from './common/toast/toast.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ToastModulePrimeng
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: InjectSessionInterceptor, multi: true,
    },
    { 
      provide: ErrorHandler, 
      useClass: CustomErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
