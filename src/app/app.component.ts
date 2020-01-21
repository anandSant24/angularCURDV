import { Component } from "@angular/core";
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  title = "CodeSandbox";
  showSpinner:boolean = true;

  constructor(private _router: Router){
    this._router.events.subscribe( (eventCapture: Event) =>{
        if(eventCapture instanceof NavigationStart){
          this.showSpinner = true;
          return true;
        }
        if(eventCapture instanceof NavigationEnd){
          this.showSpinner = false;
          return false;
          //this._router.navigate(['\pageNotFound']);
        }
      }
    )
  }
}
