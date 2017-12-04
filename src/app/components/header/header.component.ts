import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  list: Array<string>;

  @Input()
  buttonList: Array<string>;

  @Output()
  onMenuClick : EventEmitter<string> = new EventEmitter<string>(); 

  @Output()
  onButtonItemClick: EventEmitter<number> = new EventEmitter<number>();

  selectedButtonIndex = 0;

  employeeCount = 0;

  onBtnClick(index){
    this.onButtonItemClick.emit(index);
    this.selectedButtonIndex = index;
  }

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.employeeListEvent
          .subscribe(employees => {
            this.employeeCount = employees.length;
          });
  }

  menuItemClicked(e, menuItem){
    e.preventDefault();
    this.onMenuClick.emit(menuItem);
  }

}
