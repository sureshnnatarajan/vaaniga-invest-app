import { TestBed } from '@angular/core/testing';

import { InvestAppServiceService } from './invest-app-service.service';

describe('InvestAppServiceService', () => {
  let service: InvestAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
