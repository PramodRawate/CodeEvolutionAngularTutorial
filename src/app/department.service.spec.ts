import { TestBed } from '@angular/core/testing';
import { DepartmentService } from './department.service';

import {HttpClient,HttpHandler } from '@angular/common/http';

describe('DepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient,HttpHandler], 
  }));

  it('should be created', () => {
    const service: DepartmentService = TestBed.get(DepartmentService);
    expect(service).toBeTruthy();
  });
});
