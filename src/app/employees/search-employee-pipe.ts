import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.models';

@Pipe({
    name: 'searchByTerm',
    pure:true
})


export class SearchEmployeePipe implements PipeTransform{
    transform(employees: Employee[], searchByTerm: string ): Employee[]{
        
        if(!employees && !searchByTerm){
            return employees;
        }

        return employees.filter(employee=> 
            employee.name.toLowerCase().indexOf(searchByTerm.toLowerCase()) !== -1)
            // employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -​1​); 
    }
}