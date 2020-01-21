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
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { SearchEmployeePipe } from './employees/search-employee-pipe';
import { EmployeeListResolverSvc } from './employees/employee-list-resolver.service';

let appRoutes: Routes = [
  { path: "list", 
    component: ListEmployeesComponent,
    resolve: {employeeList: EmployeeListResolverSvc}
  },
  { 
    path: "create", 
    component: CreateEmployeeComponent ,
    canDeactivate: [createEmployeeCanDeActivateService]
  },
  { path: "", redirectTo: "/create", pathMatch: "full" },
  { path: "employee/:id", component: EmployeeDetailsComponent}
];

@NgModule({
  declarations: [AppComponent, ListEmployeesComponent, CreateEmployeeComponent, DisplayEmployeeComponent, EmployeeDetailsComponent, SearchEmployeePipe],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes,{ enableTracing: false }),
    FormsModule
  ],
  providers: [EmployeeService, createEmployeeCanDeActivateService, EmployeeListResolverSvc],
  bootstrap: [AppComponent]
})
export class AppModule {}
