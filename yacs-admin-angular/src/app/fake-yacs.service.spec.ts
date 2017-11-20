import { TestBed, inject } from '@angular/core/testing';

import { FakeYacsService } from './fake-yacs.service';
import {HttpModule} from '@angular/http';
describe('FakeYacsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [FakeYacsService]
    });
  });

  it('should be created', inject([FakeYacsService], (service: FakeYacsService) => {
    expect(service).toBeTruthy();
  }));
});
