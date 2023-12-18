import { TestBed } from '@angular/core/testing';

import { TestinStuffService } from './testin-stuff.service';

describe('TestinStuffService', () => {
  let service: TestinStuffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestinStuffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
