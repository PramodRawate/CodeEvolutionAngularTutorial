import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router'
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  // templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentid;
  constructor(private route:ActivatedRoute,private router:Router) {
   }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get("id"));
    // this.departmentid=id;
    this.route.paramMap.subscribe((params:ParamMap) =>{
      let id =parseInt(params.get("id"));
      this.departmentid=id;
    })
  }

  goPrevious() {
        let previousId=this.departmentid -1 ;
    this.router.navigate(["/departmentdetail",previousId])
  }

  goNext() {
        let nextId=this.departmentid + 1 ;
    this.router.navigate(["/departmentdetail",nextId])
  } 

  goToDepartments() {
    let selectedId= this.departmentid;
    this.router.navigate(["/departmentlist",{id:selectedId}])
  }
}
