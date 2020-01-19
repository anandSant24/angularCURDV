import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.models';

@Pipe({
    name: 'searchByTerm',
    pure: false
})


export class SearchEmployeePipe implements PipeTransform{
    counterMouseMoved:number=0;
    transform(employees: Employee[], searchByTerm: string ): Employee[]{
        console.log("Pipe impure mouse moves",++this.counterMouseMoved);
        if(!employees && !searchByTerm){
            return employees;
        }

        return employees.filter(employee=> 
            employee.name.toLowerCase().indexOf(searchByTerm.toLowerCase()) !== -1)
            // employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -​1​); 
    }
}