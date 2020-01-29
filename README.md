# AngularCurdV

#70 DELETE HttpClient 
    Deleting data on server
    Notice delete takes only one URI as part of the parameter.

#69 PUT Example
    Remember : Pipe is for chaining Observable operators and subscribe is for activating the observable and listening for emitted values
    details: https://stackoverflow.com/questions/51269372/difference-between-the-methods-pipe-and-subscribe-on-a-rxjs-observable

#68 POST Method need 3 things at minimum
    1. URI
    2. Data
    3. headers (content-type: application/json)
    AND RETURN TYPE OF POST IS OBSERVABLE

#67.a) Handling Resolver errors by creating and using new type ResolvedModelList
    update the employee.service  to see the changes working by providng valid and invalid url
      let invalidUrl = "http://localhost:3000/employees1";
      let url = "http://localhost:3000/employees1";
    b).Second way of handling Resolver errors 

#66 Error Handling in Angular
    When an Angular component needs data, there are usually 3 players
        The Component itself
        The Angular Service and
        The Server Side Service

        should we handle the service related errors in the service itself or in the component that consumes the service. According to Angular style guide, error inspection, interpretation, and resolution is something you want to do in the service, not in the component.

    There are two types of errors that can occur. 
        The server may reject the request, returning an HTTP response with a status code such as 404 or 500. These are error responses.
        Something could go wrong on the client-side such as a network error that prevents the request from completing successfully or an exception thrown in an RxJS operator. These errors produce JavaScript ErrorEvent objects.
        The HttpClient captures both kinds of errors in its HttpErrorResponse and you can inspect that response to figure out what really happened.

        here are 2 types of operators in rxjs - Pipeable Operators and Patch Operators
        Pipeable Operators are imported from rxjs/operators/
        Patch Operators are imported from rxjs/add/operator/
        Pipeable Operators have several benefits over Patch Operators. So if you have rxjs version 5.5 or later use pipeable operators.
        Use the following link to read the benefits of pipeable operators
        https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md

        In our case, the angular service getEmployees() method is consumed by a Resolver service,if the resolver fails, the target route i.e LIST route will not be activated. 
        If a component is directly consuming the angular service getEmployees() method, then it is easy to catch the error observable and display the error message to the user. 

        ISSUE: ERROR in src/app/employees/employee.service.ts(29,7): error TS2322: Type 'Observable<{} | Employee[]>' is not assignable to type 'Observable<Employee[]>'.
        Type '{} | Employee[]' is not assignable to type 'Employee[]'.
            Type '{}' is missing the following properties from type 'Employee[]': length, pop, push, concat, and 26 more.
        src/app/employees/employee.service.ts(40,14): error TS2304: Cannot find name 'throwError'.
        resolved by using throwError('msg here');

#65 HTTP client
    JSON server github page

    to install JSON Server
    # npm install -g json-server

    To Start server
    # json-server --watch db.json

#64 Client Server Architecture
    
    HTTP Verb	Purpose
    GET	        To get data from the server
    POST	    To post data i.e to create new item on the server
    DELETE	    To delete data
    PUT, PATCH	To update data
    PUT is idempotent where as POST is not. So what does, Idempotent mean?
    Well, since PUT is idempotent, no matter how many times you call it, you would have the same effect. For example, when you use PUT with a specific ID and if a resource with that ID does not exist, PUT creates it. Now if you issue the same PUT request again with the same ID, another item with the same ID will not be created. Instead, that existing item will be updated. So it would not matter how many times you call PUT, it would have the same effect.

    Remember we use POST to create a new item. So, when you call POST multiple times, multiple items will be created.

PUT	
    Replace an existing Resource entirely i.e update all the properties of a resource	
    Updates the item with the given ID if the item already exists or creates a new item with a given ID if the item does not exit.
PATCH
    Partial update i.e update only a sub-set of the properties of a resource
    An item can only be patched if it exists. We cannot patch an item if it does not exist

Summanry
    When a browser issues a request
    The request is mapped to route in the Angular application
    The component that is associated with the route calls the Angular Service
    The Angular service calls the server side service using HTTP
    The server side service talks to the database
    The database provides the data to the server side service
    The server side service then provides that data to the Angular service on the client side
    The Angular Service provides the data to the component
    The component displays the data to the user in the browser
    
#63 Online fake REST API
    Representational State transfer:
        Architectural pattern
        Constraints
            Client Server
            Stateless
            Cacheable
            Uniform Interface
    Uniform Interface constraints: Defines the interface between client and the server
        1.Resource: represents the data entity like employees ,customers, products etc.
        2.methods (GET, POST, PUT, DELETE) 

    Resource        Methods         result
    /Employee       Get            Get list of all employees
    /Employee/1     Get            Get employee with id=1
    /Employee       POST           Create a new employee
    /Employee/1     PUT            update the employee with id=1
    /Employee       DELETE         Delete an employee with id=1

    JSON server github page

    to install JSON Server
    # npm install -g json-server

    To Start server
    # json-server --watch db.json

#62 How does accordian component know which div to place insde which accordian-content ?
    accordian.html
    <ng-content select=".myPanelBody"></ng-content>
    parentContainer
    <div class="col-xs-10 myPanelBody">....</div>
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
