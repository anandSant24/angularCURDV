import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService{
    getEmployees(){
        return this.listEmployees;
    }
    
    addNewEmployee(employee: any){
        this.listEmployees.push(employee);
    }

    getEmployeesById(id:string):any[]{
     return this.listEmployees[Number(id)-1];
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
          phoneNumber: 1234789504,
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