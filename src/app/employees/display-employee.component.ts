import {  Input, Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from "../models/employee.models";
import { Router } from "@angular/router";

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  _employee:Employee;
  _employeeId: Number;
  
  constructor(private _router:Router) { }
  
  goToDetailsPage(id:number):void{
    this._router.navigate(['employee',id]);
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
