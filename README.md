# AngularCurdV
#61 Accordian
    using *ngIf directive
    Note: *ngIf adds/removes the elements from the DOM
    When we need not show an element, ngIf is better
    i.e When we logged in as non-admin user, there is a report that only need to be seen by admin user then *ngIf is better. If you simply hide the element then also it will get the record as the element is in the DOM
#60: Delete an Employee

#59 Edit form ( update create to have edit functionality as well)
    1.making create support edit functionality
    2. Subscript to route parameter change and reset accordingly
    3. Modify Angular service to create and update the form
    
#58 Communication between Component
    1. between parent to child
        use @Input() property
    2. between child to parent
        use @Output() property (EventEmiiter)
        templateReference Variable
    3. No parent - child relationship component
        Use 
        QueryParameter
        Require Parameter
        Optional Parameter
        Services

#57 CanActivate Guard service in angular
    1.Implement canActivateGuard as a service
    2. Register Guard with angular dependency injection system provider
    3. Tie the Guard to the route you want to protect.
    
#56 Route Loading Indication and capturing Route Navigation Event
    construnctor(private _router:Router){
        this.router.events.subscribe((routerEvent:Event){
            ...
        })
    }

#55 Angular Route Navigation Event
    NavigationStart
    NavigationEnd
    RoutesRecognized
    GuardsCheckStart
    GuardCheckEnd
    ...

#54: Resolve Guard
    1. Implement Router resolver service
    2. Register the Route Resolver
    3. Add the routeResolverService to route for which we want to prefectch data
    4. Read prefetched data from activatedRoute in list(consumer component) constructor
#53 Creating observable using of observable and 
    
    note(operator):  rxjs/add/operator/delay;
    note(obserbable):rxjs/add/observable/of; 

#52 Reading Required, Optional , Query Parameters
    1. Query Params:
        this.activatedRoute.snapshot.queryParamMap.has('searchTerm')
    2. Required, Optional
        this.activatedRoute.snapshot.paramMap.keys()

#51 Passing Query Params to via Component and html file
    Preserving Query Params
    Note: queryParams handling directive is introduced in Angular4 
    It is not available in Angular2(use preserveQueryParams[this is depricated in Angular4 version])

#50 not using Pipe to filter and Adding filtering logic in Component it-self.

#49 Impure Pipe
    notice wehn we type j in search and click on changeEmployeeName buttton Pipe is not executed
    to make it execute the solution is to make the pipe impure by setting the pure to false;
    by setting pure: false in serach-employee-pipe filter we achieved it
    But Impure pipe is processed on every chagne even when the source data doesn't change.
    Notice the logs for every mouse move they are logged in our pipe filter 100's of times our impure filter is getting called
    Even when the source data is not changed it is getting called
    
    Therefore Better approach is to move the code to the component logics itself
#48: Piper 2 types:
    1. Pure pipe
        Why to use Pure Pipe:
        1. They are Fast
        2. Angular executes a pure pipe when it detects a pure change to the input value
        PURE CHANGE: is
            either a change to primitive value(String, number, boolean)
             (You see this change when you type letter j in serach text box and you see only John as your filter and if you now click on button Change employee name) a Changed object reference (Object, Array, Date) is triggered
             and now you see both Jordan and John.
             as the reference is changed we are executing a pure change.
        3. Pure Pipe is not executed
            If input to pipe is an Object and (Try to type j in search input box and notice that John appears and now when you click on change Employee Name Angualr Pure Pipe is not executed as Only property values of object change but not the reference)
            Only property values of object change but not the reference
    
        Why are Pure pipes fast  
          ● An input for a pipe can either be a value type (String, Number, Boolean etc) or a reference type (like Array, Date, Object etc.) ● If the input to the pure pipe is a value type. Since value types store data directly in the memory slot comparing if a value type value has changed is very quick.
          ● On the other hand, if the input to the pure pipe is a reference type, it is executed only if the reference of the input object has changed. Checking if an object reference has changed is much faster than checking if each of the object individual property values have changed. 

    2. Impure

    So pure pipes are fast, but using them for filtering data is not a good idea because, the filtering may not work as expected if the source data is updated without a change to the object reference. 


#47 implementing Pipe filter the list employees
#45 How to make the the form submit when you reset and resolve this issue

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
