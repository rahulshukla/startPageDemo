import { TestBed } from '@angular/core/testing';

import { StartPageV2Service } from './start-page-v2.service';

describe('StartPageV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartPageV2Service = TestBed.get(StartPageV2Service);
    expect(service).toBeTruthy();
  });
});
