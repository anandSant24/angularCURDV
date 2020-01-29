import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Department } from "../models/department.model";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { Employee } from "../models/employee.models";
import { EmployeeService } from "./employee.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: "create-employye.component.html",
  styleUrls: ["create-employye.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  //to read the form reference variable in component we create a public variable using ViewChild decorator
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  panelTitle:string="Create";
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
  constructor(private _empSvc: EmployeeService,
    private _routerNav: Router,
    private _activatedRoute: ActivatedRoute
  ) {

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

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.getEmployeeData(id);
    })
  }

  getEmployeeData(employeeId: number) {
    if (employeeId == 0) {
      this.panelTitle = "Create";
      this.employee = {
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
      this.createEmployeeForm.reset();
    } else {
      this.panelTitle = 'Edit';
      //Issue: without below two line and if we simply use 
      // this._empSvc.getEmployeesById(employeeId) instead. is that notice
      // In the form if you update the name to say Mark1 and go to list wihtout saving notice the employee name got changed
      // since we are using the same employee object therefore to fix this we are creating a copy of employee object and assigning it to employee
      return this._empSvc.getEmployeesById(employeeId).subscribe(
        (employee) => {
          this.employee = employee;
        },
        (error:any) => console.log('Error Occured getEmployeeData: ')
      )
    }
  }

  saveEmployee(): void {
    //1. passing employreeForm template variale to the component as part 
    // of the function call and using it
    // Ex: newEmployee.reset();
    // 2. using @ViewChild() property see above with name createEmployeeForm
    if(this.employee.id === null){
      var newEmployeeData = Object.assign({}, this.employee);//creating new Object
      this._empSvc.save(newEmployeeData).subscribe(
        (empData:Employee) => {
          console.log(empData)        
        this.createEmployeeForm.reset();
        // this._empSvc.addNewEmployee(newEmployeeData);// passing newly created copy of object
        this._routerNav.navigate(['/list']);
        },
        (error: any) => console.log("Error Occured: Cannot save Employee")
      )
    }else{
      this._empSvc.updateEmployee(this.employee).subscribe(
        ()=>{
          this.createEmployeeForm.reset();
          this._routerNav.navigate(['/list']);
        },
        (error: any) =>  {console.log(error);}
      )
    }

  }
}
