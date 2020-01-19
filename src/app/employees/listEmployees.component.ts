import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee.models";
import { EmployeeService } from './employee.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  templateUrl: "listEmployees.component.html",
  styleUrls: ["./listEmployees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  indexEmp:number = 1;
  selectedEmployeeId: number;
  private _searchByName: string="";

  employees: Employee[];
  filteredEmployees: Employee[];

  onMouseMove(){
  }

  constructor(private _router:Router, private empSvc: EmployeeService, private  _activatedRoute: ActivatedRoute){
  }

  goToDetailsPage(id:number):void{
    this._router.navigate(['employee',id]);
  }
  changeEmployeeName(){
    this.employees[0].name="Jordan";
    // const newEmployeeArray:Employee[] = Object.assign([], this.employees);
    // newEmployeeArray[0].name = "Jordan";
    // this.employees = newEmployeeArray;
  }
  employeeToDisplay:Employee;
  get searchByName(){
    return this._searchByName;
  }
  set searchByName(value:string){
    this._searchByName = value;
    this.filteredEmployees = this.filterEmployee(value);
  }

  filterEmployee(inputEmployee:string){
    return this.employees.filter(employee => 
      employee.name.toLowerCase().indexOf(inputEmployee.toLowerCase()) !== -1
    )
  }
  ngOnInit(){
    this.employees = this.empSvc.getEmployees();
    // this.employeeToDisplay = this.employees[0];
    this.filteredEmployees = this.employees;
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
