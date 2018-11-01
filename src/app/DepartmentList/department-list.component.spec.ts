import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentListComponent } from './department-list.component';

import { DepartmentService } from '../department.service';
import { HttpClient,HttpHandler } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';

describe('DepartmentListComponent', () => {
  let component: DepartmentListComponent;
  let fixture: ComponentFixture<DepartmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentListComponent],
      imports: [RouterTestingModule],
      providers: [DepartmentService,HttpClient,HttpHandler],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
