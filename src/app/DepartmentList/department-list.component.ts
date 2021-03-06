import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments ;
  public selectedId ;  
  constructor(private departmentservice:DepartmentService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.departmentservice.getDepartments().subscribe((data => this.departments = data));
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get("id"));
      this.selectedId=id;
    })
  }

  onSelect(department) {
    // Absolute Routing is as given below
    this.router.navigate(["/departmentdetail",department.id])

    // //Relative routing is as folow
    // this.router.navigate([department.id],{relativeTo: this.route});
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }
}
