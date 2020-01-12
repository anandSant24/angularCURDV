import { Input, Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from "../models/employee.models";

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  _employee:Employee
  @Input() employeeId:Number;
  
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

  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges){
    for(const propKey of Object.keys(changes)){
      console.log(propKey)
      // let change = changes[propKey];
      // let from = JSON.stringify(change.previousValue);
      // let to = JSON.stringify(change.currentValue);
      // console.log("change from "+from +"to "+ to);
    }
  }
}
