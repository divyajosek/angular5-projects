import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Output()
  onSubmit: EventEmitter<Employee>  = new EventEmitter<Employee>();

  newEmployee: Employee = new Employee('', null);
  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    this.onSubmit.emit(this.newEmployee);
  }

}
