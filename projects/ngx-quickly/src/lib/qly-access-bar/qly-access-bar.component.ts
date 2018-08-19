import {Component, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';
import {MatToolbar} from '@angular/material';

export class AccessBarProperties {
  height: '50px';
  fontFamily: '\'Arial Narrow\', Arial, sans-serif';
  /*font-weight: bolder;*/
  /*font-size: large;*/
  /*color: whitesmoke;*/
  /*background-color: darkslategrey;*/
  /*box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);*/
  /*z-index: 10*/
}

@Component({
  selector: 'qly-access-bar',
  templateUrl: './qly-access-bar.component.html',
  styleUrls: ['./qly-access-bar.component.css']
})
export class QlyAccessBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
