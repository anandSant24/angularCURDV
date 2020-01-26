import { ActivatedRouteSnapshot,RouterStateSnapshot, Resolve } from '@angular/router';
import {  Employee } from "../models/employee.models";
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';
// import { ResolvedModelList } from '../models/resolved-employeeList.model';
import { map,catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeListResolverSvc implements Resolve<Employee[] | string>{
    constructor(private _empSvc: EmployeeService){}
    resolve(route: ActivatedRouteSnapshot , state:RouterStateSnapshot): Observable<Employee[] | string>{
        return this._empSvc.getEmployees()
            .pipe(
                catchError((err:string) => 
                    Observable.of(err)
                )
            )
    }
}
 

