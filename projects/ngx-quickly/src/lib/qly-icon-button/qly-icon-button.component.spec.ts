import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlyIconButtonComponent } from './qly-icon-button.component';

describe('QlyIconButtonComponent', () => {
  let component: QlyIconButtonComponent;
  let fixture: ComponentFixture<QlyIconButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlyIconButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlyIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
