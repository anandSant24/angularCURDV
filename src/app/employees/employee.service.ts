import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.models';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//Note: observable of
import 'rxjs/add/observable/of';
//Note: it is operator has delay

import 'rxjs/add/operator/delay';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// import { throwError } from "rxjs/observable/ErrorObservable";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService{

    invalidUrl = "http://localhost:3000/employees1";
    url = "http://localhost:3000/employees";

    constructor(private _httpClient: HttpClient){

    }
    // getEmployees(){
    //     return this.listEmployees;
    // }
    /* Converting an array returned to an Observable */
    getEmployees(): Observable<Employee[]>{
      //Notice we made the service url 
      return this._httpClient.get<Employee[]>(this.url)
        .pipe(catchError(this.handleError));
      //return Observable.of(this.listEmployees).delay(2000);
    }
    
    handleError(errorResponse: HttpErrorResponse){
      if(errorResponse.error instanceof ErrorEvent){
        console.log("Client side error occured");
      }else{
        console.log("server side error occured");
      }
      return throwError("service failure error occured");
    }

    save(employee: Employee): Observable<Employee>{
      if(employee.id === null){
        // to add a unique value
        // const maxId = this.listEmployees.reduce( function(e1, e2){
        //   return (e1.id > e2.id) ? e1: e2;
        // }).id;
        // employee.id = maxId + 1;
        return this._httpClient.post<Employee>(`${this.url}`, employee, {
          headers: new HttpHeaders({
            contentType: 'application/json'
          })
        }).pipe(catchError(this.handleError));
      }else{
        // if id in listEmployees is matched to input employee id it means we found the id in listEmployees 
        const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id)
        this.listEmployees[foundIndex] = employee;
        
      }
    }
    
    updateEmployee(employee:Employee): Observable<void>{
      return this._httpClient.put<void>(`${this.url}/${employee.id}`, employee, { 
        headers: new HttpHeaders({
              'contentType': 'application/json'
          })
        }).pipe(catchError(this.handleError));
    }

    deleteEmployee(id:number): Observable<void>{
      return this._httpClient.delete<void>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
    }

    addEmployee(employee: any): Observable<Employee>{
        return this._httpClient.post<Employee>(`${this.url}`, employee, 
        {
          headers: new HttpHeaders({
            'ContentType': 'application/json'
          })
        }
        ).pipe(catchError(this.handleError));
    }

    getEmployeesById(id:number):Observable<Employee>{
      return this._httpClient.get<Employee>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
    }

    private listEmployees: any[] = [
        {
          id: 1,
          name: "Mark",
          gender: "Male",
          email: "mark@yahoogmail.com",
          phoneNumber: 4325678904,
          contactPreference: "Email",
          dateOfBirth: new Date("10/25/1988"),
          department: "1",
          isActive: true,
          photoPath: "../assets/images/mark.png"
        },
        {
          id: 2,
          name: "Mary",
          gender: "Female",
          email: "mary@yahoogmail.com",
          contactPreference: "Email",
          dateOfBirth: new Date("11/20/1979"),
          department: "2",
          isActive: true,
          photoPath: "../assets/images/mary.jpeg"
        },
        {
          id: 3,
          name: "John",
          gender: "Male",
          email: "John@yahoogmail.com",
          phoneNumber: 5432978640,
          contactPreference: "Phone",
          dateOfBirth: new Date("3/25/1976"),
          department: "3",
          isActive: false,
          photoPath: "../assets/images/john.png"
        }
      ];
}