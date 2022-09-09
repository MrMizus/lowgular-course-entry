import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from '../../model/person.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  title: string = 'Employee list';
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();

  constructor(private _employeeService: EmployeeService) { }

  remove(id: string) {
    this._employeeService.delete(id).subscribe({
      error() {alert("User was seccessfully removed");}
    });
  }
}
