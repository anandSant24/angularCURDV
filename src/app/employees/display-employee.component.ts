import {  Input, Output, Component, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Employee } from "../models/employee.models";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  _employee:Employee;
  _employeeId: Number;
  selectedEmployeeId:number;


  constructor(private _router:Router, private _activatedRoute: ActivatedRoute, private _empSvc: EmployeeService) {   
  }

  @Input()
  searchTerm: string;
  confirmDelete: boolean = true;
  isHidden: boolean = true;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();

  goToDetailsPage(){
    this._router.navigate(['/employee', this._employee.id],{
      queryParams:{'searchTerm':this.searchTerm}
    })
  }

  editEmployees(){
    // edit is nothing but create.employee.component
    this._router.navigate(['/edit', this._employee.id]);
  
  }

  deleteEmployees(){
    this._empSvc.deleteEmployee(+this.employee.id);
    this.notifyDelete.emit(+this.employee.id);
  }
  getNameAndGender():string{
    return "Clicked : "+this._employee.name+ " "+this._employee.gender;
  }

  @Input() 
  set employeeId(num:Number){
    console.log('setted', this._employeeId);
    this._employeeId = num;
  };

  get employeeId():Number{
    console.log('updated', this._employeeId);
    return this._employeeId;
  };
  
  @Input()
  set employee(val: Employee){
    // console.log('previous value = ',this._employee? this._employee.name: null);
    this._employee = val;
    // console.log('Current Val', this._employee);
  }
  get employee(): Employee{
    return this._employee;
  }
  // employee: Employee;



  ngOnInit() {
    
    this.selectedEmployeeId = +this._activatedRoute.snapshot.paramMap.get('id');
  }
  
  // ngOnChanges(changes: SimpleChanges){
  //   for(const propKey of Object.keys(changes)){
  //     let change = changes[propKey];
  //     let from = JSON.stringify(change.previousValue);
  //     let to = JSON.stringify(change.currentValue);
  //     console.log("propName is "+propKey+" change from "+from +"to "+ to);
  //   }
  // }
}
