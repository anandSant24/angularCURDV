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
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailSGuardSvc } from './employees/employee-details-guard.service';
import { AccordianComponent } from './shared/accordian.component';
import { HttpClientModule } from '@angular/common/http';

let appRoutes: Routes = [
  { path: "list", 
    component: ListEmployeesComponent,
    resolve: {employeeList: EmployeeListResolverSvc}
    //note employeeList should match in ListEmployeesComponent i.e 
    //    this.employees = this._activatedRoute.snapshot.data['employeeList'];
  },
  
  { 
    //the id is to distinguish between create and edit; id=0 => Create else edit/update
    path: "edit/:id", 
    component: CreateEmployeeComponent ,
    canDeactivate: [createEmployeeCanDeActivateService]
  },
  
  { path: "", redirectTo: "/list", pathMatch: "full" },
  
  { path: "employee/:id",
    component: EmployeeDetailsComponent,
    canActivate: [EmployeeDetailSGuardSvc]
  },
  {
    path: "pageNotFound", component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [AppComponent, ListEmployeesComponent, CreateEmployeeComponent, DisplayEmployeeComponent, EmployeeDetailsComponent, SearchEmployeePipe, PageNotFoundComponent, AccordianComponent],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes,{ enableTracing: false }),
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, createEmployeeCanDeActivateService, EmployeeListResolverSvc,EmployeeDetailSGuardSvc],
  bootstrap: [AppComponent]
})
export class AppModule {}
