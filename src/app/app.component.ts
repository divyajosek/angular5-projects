import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular5 Training';
  activeViewIndex = 0;
  selectedEmployee;  
  menuList: Array<string> = ['Home', 'About', 'Contact'];
  sectionList: Array<string> = ['HR', 'Admin', 'IT'];
  employees: Array<Employee> = [];

  buttons: Array<string> = ['View Employees', 'Add Employee'];

  constructor(private service: EmployeeService){
    
  }

  ngOnInit(){
     const empObservable = this.service.getEmployees();
     
     empObservable.subscribe((res: Array<Employee>) => {
        this.employees = res
      });
  }

  onMenuClick(item){
    alert('menu clicked is ' + item);
  }

  onSectionClick(item){
    alert('section clicked is ' + item);
  }

  clearSelections() {
    this.employees.forEach(emp => emp.selected = false);
  }

  onSelectEmployee(employee: Employee) {
    this.clearSelections();
    employee.selected = true;
    this.selectedEmployee = employee;
  }

  addEmployee(employee) {
    this.employees.push(employee);
    this.service.employeeListEvent.next(this.employees);
  }

  selectView(buttonIndex){
    this.activeViewIndex = buttonIndex;
  }

  deleteEmployee(empIndex) {
    this.employees.splice(empIndex, 1);
  }

}
