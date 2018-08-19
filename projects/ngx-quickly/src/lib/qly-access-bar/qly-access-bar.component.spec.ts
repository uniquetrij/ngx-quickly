import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlyAccessBarComponent } from './qly-access-bar.component';

describe('QlyAccessBarComponent', () => {
  let component: QlyAccessBarComponent;
  let fixture: ComponentFixture<QlyAccessBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlyAccessBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlyAccessBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
