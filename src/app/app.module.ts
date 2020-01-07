import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { AppComponent } from "./app.component";
import { ListEmployeesComponent } from "./employees/listEmployees.component";
import { CreateEmployeeComponent } from "./employees/create-employye.component";
let appRoutes: Routes = [
  { path: "list", component: ListEmployeesComponent },
  { path: "create", component: CreateEmployeeComponent },
  { path: "", redirectTo: "/create", pathMatch: "full" }
];
@NgModule({
  declarations: [AppComponent, ListEmployeesComponent, CreateEmployeeComponent],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
