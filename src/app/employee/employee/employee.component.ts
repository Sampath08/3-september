import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
        
     employee = {} as IEmployee;
     employees: IEmployee[];

  constructor() { 
    this.employees = [
      {empNumber: 101, empName: 'sampath', empSalary:65000},
      {empNumber: 101, empName: 'don', empSalary:65000},
      {empNumber: 101, empName: 'ironman', empSalary:65000},
      
    ]
  }

  ngOnInit(): void {
  }

}
