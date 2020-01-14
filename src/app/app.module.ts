import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { AppComponent } from "./app.component";
import { ListEmployeesComponent } from "./employees/listEmployees.component";
import { CreateEmployeeComponent } from "./employees/create-employye.component";
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { createEmployeeCanDeActivateService } from "./employees/create-employee-canDeActivate.service";

let appRoutes: Routes = [
  { path: "list", component: ListEmployeesComponent },
  { 
    path: "create", 
    component: CreateEmployeeComponent ,
    canDeactivate: [createEmployeeCanDeActivateService]
  },
  { path: "", redirectTo: "/create", pathMatch: "full" },
];

@NgModule({
  declarations: [AppComponent, ListEmployeesComponent, CreateEmployeeComponent, DisplayEmployeeComponent],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes,{ enableTracing: false }),
    FormsModule
  ],
  providers: [EmployeeService, createEmployeeCanDeActivateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
