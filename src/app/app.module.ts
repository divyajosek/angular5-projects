import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeService } from './employee.service';
import { SelectedEmployeeComponent } from './components/selected-employee/selected-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EmpNamePipe } from './emp-name.pipe';
import { MyColorDirective } from './my-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SelectedEmployeeComponent,
    AddEmployeeComponent,
    AddCategoryComponent,
    EmpNamePipe,
    MyColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
