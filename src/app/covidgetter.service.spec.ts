import { TestBed } from '@angular/core/testing';

import { CovidgetterService } from './covidgetter.service';

describe('CovidgetterService', () => {
  let service: CovidgetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidgetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
