import { TestBed } from '@angular/core/testing';

import { CreatpostService } from './creatpost.service';

describe('CreatpostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatpostService = TestBed.get(CreatpostService);
    expect(service).toBeTruthy();
  });
});
