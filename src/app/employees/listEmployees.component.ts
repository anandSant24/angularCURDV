import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee.models";
import { EmployeeService } from './employee.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  templateUrl: "listEmployees.component.html",
  styleUrls: ["./listEmployees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  
  constructor(private empSvc: EmployeeService){
  }
  ngOnInit(){
    this.employees = this.empSvc.getEmployees();
  }
  employees: Employee[];
  
  addNewEmployee(newEmployee:Employee):void {
    this.employees.push(newEmployee);
  }
}
