import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesFacesComponent } from './employees-faces.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeesFacesComponent],
  providers: [],
  exports: [EmployeesFacesComponent]
})
export class EmployeesFacesComponentModule {
}
