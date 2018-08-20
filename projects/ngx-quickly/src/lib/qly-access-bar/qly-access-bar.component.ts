import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatToolbar} from '@angular/material';

export class AccessBarProperties {
    height: '50px';
    fontFamily: '\'Arial Narrow\', Arial, sans-serif';
    fontWeight: 'bolder';
    fontSize: 'large';
    color: 'whitesmoke';
    backgroundColor = 'darkslategrey';
}

// @ts-ignore
@Component({
    selector: 'qly-access-bar',
    templateUrl: './qly-access-bar.component.html',
    styleUrls: ['./qly-access-bar.component.css']
})
export class QlyAccessBarComponent implements OnInit {

    @Input()_properties: AccessBarProperties = new AccessBarProperties();


    constructor() {
    }

    ngOnInit() {
    }
}
