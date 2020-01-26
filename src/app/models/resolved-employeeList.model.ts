import { Employee } from './employee.models';

export class ResolvedModelList{
    constructor(public employeeList: Employee[], public error: any =  null){}
}