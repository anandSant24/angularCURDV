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
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    this.employee = this._empSvc.getEmployeesById(this.id);
  }
  ViewNextEmployee(){
    if(this.id <3){
      this.id++
    }else{
      this.id = 1;
    }
    this._route.navigate(['employee', this.id]);
  }
}
