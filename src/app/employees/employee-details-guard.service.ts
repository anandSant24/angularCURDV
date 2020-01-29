import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators/catchError';
@Injectable()
export class EmployeeDetailSGuardSvc implements CanActivate{    
    constructor( private _empSvc: EmployeeService,
                 private _router: Router){
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
         return this._empSvc.getEmployeesById(+route.paramMap.get('id')).pipe(
            map(employee => {
                const employeeExits = !!employee;
                if(employeeExits){
                    return true;
                }else{
                    this._router.navigate(['/pageNotFound']);
                    return false;
                }
            }),
            catchError((error :any) =>{
                    console.log(error);
                    return Observable.of(false);
                }
            )
        ) // end of Pipe  
    }

}