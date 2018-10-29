import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeService } from './employee.service';
import { DepartmentService } from './department.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponets } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponets,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
