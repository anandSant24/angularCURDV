import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from "../models/employee.models";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id:number;
  constructor(private _activatedRoute: ActivatedRoute, private _empSvc: EmployeeService,
    private _route:Router) {}
  employee: Employee;
  ngOnInit() {
    // here paramMap is an Observable, and we subscribed to it, 
    // so every time route param changes we get notification and we execute the code
    this._activatedRoute.paramMap.subscribe(param =>{
      //Note + operator converts string to a number
      this.id = +param.get("id");
      
      this._empSvc.getEmployeesById(this.id).subscribe(
        (empData) => {
          this.employee = empData;
        },
        (error: any) => {
          console.log('error');
        }
      );
    }) 
  }
  ViewNextEmployee(){
    if(this.id <3){
      this.id++
    }else{
      this.id = 1;
    }
    this._route.navigate(['employee', this.id], {queryParamsHandling:'preserve'});
  }
}
