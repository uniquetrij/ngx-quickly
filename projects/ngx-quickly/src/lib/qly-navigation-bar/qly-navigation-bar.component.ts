import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

// @ts-ignore
@Component({
  selector: 'qly-navigation-bar',
  templateUrl: './qly-navigation-bar.component.html',
  styleUrls: ['./qly-navigation-bar.component.css']
})
export class QlyNavigationBarComponent implements OnInit {

  @ViewChild('_sidenav') _sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  _toggle() {
    this._sidenav.toggle();
  }

}
