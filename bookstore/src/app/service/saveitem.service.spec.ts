import { TestBed } from '@angular/core/testing';

import { SaveitemService } from './saveitem.service';

describe('SaveitemService', () => {
  let service: SaveitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
