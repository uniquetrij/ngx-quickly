import {Component, OnInit} from '@angular/core';
import {QlyIconButtonModel} from '../../projects/ngx-quickly/src/lib/qly-icon-button/qly-icon-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-quickly';

  _menuMenuItem: QlyIconButtonModel = new QlyIconButtonModel();
  _accountMenuItem: QlyIconButtonModel = new QlyIconButtonModel();

  constructor() {
  }

  ngOnInit() {
    this._menuMenuItem.icon = 'menu';
    this._menuMenuItem.tooltip = 'Menu';
    this._menuMenuItem.onClick = this._onClick.bind(this);

    // this._accountMenuItem.icon = 'people';
    // this._accountMenuItem.image = 'https://www.w3schools.com/howto/img_avatar2.png';
    // this._accountMenuItem.tooltip = 'Account';
  }

  _onClick() {
    console.log('hello');
  }
}
