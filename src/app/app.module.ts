import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RootStoreModule } from './root-store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './shared/models/modules/material-design.module';
import { TokenInterceptor } from './shared/services/token.interceptor';
import { LoginComponent } from './shared/components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, IonicModule.forRoot({ mode: 'ios' }), AppRoutingModule,  
  RootStoreModule, HttpClientModule, NoopAnimationsModule, MaterialDesignModule, FormsModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
