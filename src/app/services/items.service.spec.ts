import { TestBed, inject } from '@angular/core/testing';

import { ItemsService } from './items.service.ts';

describe('ItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsService]
    });
  });

  it('should ...', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));
});
