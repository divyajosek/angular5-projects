import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-selected-employee',
  templateUrl: './selected-employee.component.html',
  styleUrls: ['./selected-employee.component.css']
})
export class SelectedEmployeeComponent implements OnInit {
  @Input()
  employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
