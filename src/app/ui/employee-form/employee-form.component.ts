import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import {CreateEmployeeModel} from "../../model/create-employee.model";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
    salary: new FormControl(null, [Validators.required])
  });

  constructor(private _employeesService: EmployeesService) {
  }

  onEmployeeFormSubmitted(form: CreateEmployeeModel): void {
    this._employeesService.create(form).subscribe();
  }
}
