import { ActivatedRouteSnapshot,RouterStateSnapshot, Resolve } from '@angular/router';
import {  Employee } from "../models/employee.models";
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeListResolverSvc implements Resolve<Employee[]>{
    constructor(private _empSvc: EmployeeService){}
    resolve(route: ActivatedRouteSnapshot , state:RouterStateSnapshot): Observable<Employee[]>{
        return this._empSvc.getEmployees();
    }
}
 

