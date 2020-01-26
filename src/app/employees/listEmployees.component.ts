import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee.models";
import { EmployeeService } from './employee.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ResolvedModelList } from '../models/resolved-employeeList.model';

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
  error: string;
  onMouseMove(){
  }

  constructor(private _router:Router, private empSvc: EmployeeService, private  _activatedRoute: ActivatedRoute){
    const resolvedEmployeeList: ResolvedModelList = this._activatedRoute.snapshot.data['employeeList'];
    if(resolvedEmployeeList.error === null){
      this.employees = resolvedEmployeeList.employeeList;
    }else{
      this.error = resolvedEmployeeList.error;
    }
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
      // this.empSvc.getEmployees().subscribe(empData => {
      //     this.employees = empData;
          // console.log(empData);
          if(this._activatedRoute.snapshot.queryParamMap.has('searchTerm')){
            this.searchByName = this._activatedRoute.snapshot.queryParamMap.get('searchTerm')
          }else{
            this.filteredEmployees = this.employees;
          }
      //   }
      // );
    // this.employeeToDisplay = this.employees[0];
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
  deleteEmployee(id:number){
    let empId = this.filteredEmployees.findIndex(emp => emp.id === id);
    if(empId !== -1){
      this.filteredEmployees.splice(empId, 1);
    }
  }
}
