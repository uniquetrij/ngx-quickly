import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlyNavigationBarComponent } from './qly-navigation-bar.component';

describe('QlyNavigationBarComponent', () => {
  let component: QlyNavigationBarComponent;
  let fixture: ComponentFixture<QlyNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlyNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlyNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
