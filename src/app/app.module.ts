import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SscCglComponent } from './ssc-cgl/ssc-cgl.component';
import { CommonAppModule } from './common.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { LoaderComponent } from './common/header/loader/loader.component';
import { RrbConstableComponent } from './rrb-constable/rrb-constable.component';
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HeaderComponent,
    SscCglComponent,
    RrbConstableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonAppModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
