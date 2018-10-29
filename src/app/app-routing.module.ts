import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { EmployeeDetailComponent } from './EmployeeDetail/employee-detail.component';
import { DepartmentDetailComponent } from './DepartmentDetail/department-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListComponent } from './DepartmentList/department-list.component';
 
const routes:  Routes = [
    {path: '', redirectTo:'/departmentlist', pathMatch:'full'},
    {path: 'departmentlist', component: DepartmentListComponent},
    {path: 'departmentdetail/:id', component: DepartmentDetailComponent},
    {path: 'employees', component:EmployeeDetailComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponets = [DepartmentListComponent,DepartmentDetailComponent,EmployeeDetailComponent,PageNotFoundComponent]