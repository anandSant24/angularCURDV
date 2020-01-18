import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee.models";
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: "listEmployees.component.html",
  styleUrls: ["./listEmployees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  indexEmp:number = 1;
  employees: Employee[];
  selectedEmployeeId: number;
  searchByName: String="";
  
  constructor(private empSvc: EmployeeService, private  _activatedRoute: ActivatedRoute){
  }
  employeeToDisplay:Employee;
  
  ngOnInit(){ 
    this.employees = this.empSvc.getEmployees();
    this.employeeToDisplay = this.employees[0];
  }

  addNewEmployee(newEmployee:Employee):void {
    this.employees.push(newEmployee);
  }

  nextEmployee(): void{
    if(this.indexEmp <=2){
      this.employeeToDisplay = this.employees[this.indexEmp];
      this.indexEmp++;
    }else{
      this.employeeToDisplay = this.employees[0];
    }
  }
}
