import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent]
})
export class EmployeeListComponentModule {
}
