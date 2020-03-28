import { TestBed } from '@angular/core/testing';

import { SimpleAudioplayerService } from './simple-audioplayer.service';

describe('SimpleAudioplayerService', () => {
  let service: SimpleAudioplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleAudioplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
