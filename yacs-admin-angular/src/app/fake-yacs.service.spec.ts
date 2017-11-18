import { TestBed, inject } from '@angular/core/testing';

import { FakeYacsService } from './fake-yacs.service';

describe('FakeYacsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeYacsService]
    });
  });

  it('should be created', inject([FakeYacsService], (service: FakeYacsService) => {
    expect(service).toBeTruthy();
  }));
});
