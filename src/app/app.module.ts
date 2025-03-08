import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SscCglComponent } from './ssc-cgl/ssc-cgl.component';
import { CommonAppModule } from './common.module';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SscCglComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonAppModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
