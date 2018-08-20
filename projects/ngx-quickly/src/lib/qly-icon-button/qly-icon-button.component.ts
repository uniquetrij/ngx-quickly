import {Component, Input, OnInit} from '@angular/core';

export class QlyIconButtonModel {
  icon: string;
  tooltip: string;
  onClick: Function;
}

// @ts-ignore
@Component({
  selector: 'qly-icon-button',
  templateUrl: './qly-icon-button.component.html',
  styleUrls: ['./qly-icon-button.component.css']
})
export class QlyIconButtonComponent implements OnInit {

  @Input() _buttonModel: QlyIconButtonModel;

  constructor() { }

  ngOnInit() {
  }

}
