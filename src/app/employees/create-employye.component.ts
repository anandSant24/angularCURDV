import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Department } from "../models/department.model";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { Employee } from "../models/employee.models";
import { EmployeeService } from "./employee.service";
import { Router } from '@angular/router';

@Component({
  templateUrl: "create-employye.component.html",
  styleUrls: ["create-employye.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  //to read the form reference variable in component we create a public variable using ViewChild decorator
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  showPreview = false;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: '-1',
    isActive: null,
    photoPath: null
  };
  togglePreviewPhoto(): void {
    this.showPreview = !this.showPreview;
  }
  dateOfBirth: Date = new Date("12/20/1990");
  datePickerConfig: Partial<BsDatepickerConfig>;
  constructor(private empSvc:EmployeeService, private routerNav: Router) {

    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        showWeekNumbers: false,
        minDate: new Date(2019, 0, 1),
        maxDate: new Date(2020, 0, 1),
        defaultInputFormat: "DD/MM/YYY"
      }
    );
  }
  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "IT" },
    { id: 3, name: "HR" },
    { id: 4, name: "Payroll" }
  ];
  // isAcive = true;
  //department: "1";

  ngOnInit() {}

  saveEmployee(newEmployee: NgForm): void {
    //1. passing employreeForm template variale to the component as part 
    // of the function call and using it
    // Ex: newEmployee.reset();
    
    // 2. using @ViewChild() property see above with name createEmployeeForm
    this.createEmployeeForm.reset();
    this.empSvc.addNewEmployee(this.employee);

    this.routerNav.navigate(['/list']);
  }
}
