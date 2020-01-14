import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
// import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { CreateEmployeeComponent } from "./create-employye.component"; 

@Injectable()
export class createEmployeeCanDeActivateService implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component: CreateEmployeeComponent): boolean{
        //check if form is dirty then return false so it won't get routed to new page else return true
        
        if(component.createEmployeeForm.dirty){
            return confirm('are you sure you want to navigate out to the page');
        }else{
            return true;
        }

    //    return component.createEmployeeForm.dirty? false: true;
    }

}