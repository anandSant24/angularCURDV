import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeDetailSGuardSvc implements CanActivate{    
    constructor( private _empSvc: EmployeeService,
                 private _router: Router){
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const employeeExits = !!this._empSvc.getEmployeesById(+route.paramMap.get('id'));
        if(employeeExits){
            return true;
        }else{
            this._router.navigate(['/pageNotFound']);
            return false;
        }
    }

}