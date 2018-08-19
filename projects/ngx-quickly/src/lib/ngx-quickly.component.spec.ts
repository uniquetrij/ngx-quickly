import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQuicklyComponent } from './ngx-quickly.component';

describe('NgxQuicklyComponent', () => {
  let component: NgxQuicklyComponent;
  let fixture: ComponentFixture<NgxQuicklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxQuicklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxQuicklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
