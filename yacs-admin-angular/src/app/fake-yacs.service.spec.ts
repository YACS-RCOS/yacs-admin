import { TestBed, inject } from '@angular/core/testing';

import { FakeYacsService } from './fake-yacs.service';
import {HttpClientModule} from '@angular/common/http';
describe('FakeYacsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FakeYacsService]
    });
  });

  it('should be created', inject([FakeYacsService], (service: FakeYacsService) => {
    expect(service).toBeTruthy();
  }));
});
