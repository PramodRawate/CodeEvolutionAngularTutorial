import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { IDepartment } from './department';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';

@Injectable()
export class DepartmentService {

  private _url = "/assets/data/departments.json";
  constructor(private http:HttpClient) { }

  getDepartments():Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(this._url).catch(this.errorHandler);;
  }

  errorHandler(error:HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error" );
  }
}
