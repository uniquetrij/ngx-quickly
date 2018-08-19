import {NgModule} from '@angular/core';
import {NgxQuicklyComponent} from './ngx-quickly.component';
import {QlyIconButtonComponent} from './qly-icon-button/qly-icon-button.component';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { QlyAccessBarComponent } from './qly-access-bar/qly-access-bar.component';
import { QlyNavigationBarComponent } from './qly-navigation-bar/qly-navigation-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  declarations: [NgxQuicklyComponent, QlyIconButtonComponent, QlyAccessBarComponent, QlyNavigationBarComponent],
  exports: [NgxQuicklyComponent, QlyIconButtonComponent, QlyAccessBarComponent, QlyNavigationBarComponent],
})
export class NgxQuicklyModule {
}
