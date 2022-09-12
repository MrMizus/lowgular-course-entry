import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';
import { EmployeesModel } from '../../model/employees.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  constructor(private _employeesService: EmployeesService) {
  }
  data$: Observable<EmployeesModel[] | null> = this._employeesService.getAll();

  remove(id: string) {
    this._employeesService.delete(id).subscribe();

  }

}
