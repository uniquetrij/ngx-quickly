import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxQuicklyModule} from '../../projects/ngx-quickly/src/lib/ngx-quickly.module';
import {MatToolbarModule} from '@angular/material';
// import {QlyAccessBarComponent} from '../../projects/ngx-quickly/src/lib/qly-access-bar/qly-access-bar.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    NgxQuicklyModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
