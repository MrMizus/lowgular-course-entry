import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { EmployeeFormComponent } from './ui/employee-form/employee-form.component';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { HomeComponentModule } from './ui/home/home.component-module';
import { EmployeeFormComponentModule } from './ui/employee-form/employee-form.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'employee-list', component: EmployeeListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeComponentModule, EmployeeFormComponentModule, EmployeesServiceModule, EmployeeListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
