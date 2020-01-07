import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee.models";
@Component({
  templateUrl: "listEmployees.component.html",
  styleUrls: ["./listEmployees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: "Mark",
      gender: "Male",
      email: "mark@yahoogmail.com",
      phoneNumber: 4325678904,
      contactPreference: "Email",
      dateOfBirth: new Date("10/25/1988"),
      department: "Fire",
      isActive: true,
      photoPath: "../../assets/images/mark.png"
    },
    {
      id: 2,
      name: "Mary",
      gender: "Female",
      email: "mary@yahoogmail.com",
      phoneNumber: 1234789504,
      contactPreference: "Email",
      dateOfBirth: new Date("11/20/1979"),
      department: "Doctor",
      isActive: true,
      photoPath: "assets/images/mary.jpeg"
    },
    {
      id: 3,
      name: "John",
      gender: "Male",
      email: "John@yahoogmail.com",
      phoneNumber: 5432978640,
      contactPreference: "Phone",
      dateOfBirth: new Date("3/25/1976"),
      department: "Police",
      isActive: false,
      photoPath: "assets/images/john.png"
    }
  ];
  // constructor() {}

  ngOnInit() {}
}
