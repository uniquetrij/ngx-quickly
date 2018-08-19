import { TestBed, inject } from '@angular/core/testing';

import { NgxQuicklyService } from './ngx-quickly.service';

describe('NgxQuicklyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxQuicklyService]
    });
  });

  it('should be created', inject([NgxQuicklyService], (service: NgxQuicklyService) => {
    expect(service).toBeTruthy();
  }));
});
