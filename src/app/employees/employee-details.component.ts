import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from "../models/employee.models";


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _empSvc: EmployeeService) {}
  employee: Employee;
  ngOnInit() {
    const empId = this._activatedRoute.snapshot.paramMap.get('id');
    this.employee = this._empSvc.getEmployeesById(empId);
  }
}
