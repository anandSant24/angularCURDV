# AngularCurdV
#44 Required Vs Optional Route Parameter
    1. Required Paramter are part of route configuration where as optional route parameters are not
    2. Required route parameters are used in pattern in matching
    3. Optional route parameter must be passed after the required route parameter
    4. 
        a) Prefer a Route parameter when the value is simple and Mandatory
        b) Prefer Optional Route Parameter when the value is Optional and Complex


#43 optional Route Parameter
#42

#41 Angular Read Route Parameters
Task: Read url params and retrive details
    when we navigate to a page(that page's dispaly component should handle this logic)
    in the Naviageted page component 
        import { ActivatedRoute } from '@angular/router';
        constructor()//initialize ActivatedRoute
        OnInit(){ 
            //have the logic to read the params
            and display the view Template
        }

#40 Angular Route Params
    create a module employee-details(new page)
    on click of the tile navigate to this new page
    handle onclick and add router.navigate(['path',idDeatils])
    update the app.modules to have that path
        ex: { path: 'employee/:id" component: newComponentName}
    NewComponent HTML code should take care of this code.

#39 CanDeactivateGuard
    1. build the route guard as a service
    2. Register the router guard as a dependency injection
    3. Tie the guard to route

#31 Creating a new employee using the create employee Form and on click of save add it to list page.
    
#23Make the Select field as a required filed if it is not selected display Error message:
Department is Required
    a) Display Default as first option

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
