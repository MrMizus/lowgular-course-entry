import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeesModel } from '../model/employees.model';
import { ApiResponse } from './api.response';
import { EmployeesResponse } from './employees.response';
import {CreateEmployeeModel} from "../model/create-employee.model";

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeesModel[]> {
    return this._httpClient.get<ApiResponse<EmployeesResponse[]>>(
      'https://dummy.restapiexample.com/api/v1/employees')
      .pipe(
        map((response: ApiResponse<EmployeesResponse[]>) => {
          return response.data.map((employeeResponse: EmployeesResponse) => {
            return {
              id: employeeResponse.id,
              name: employeeResponse.employee_name,
              salary: employeeResponse.employee_salary,
              age: employeeResponse.employee_age,
              img: employeeResponse.profile_image,
            }
          });
        })
      )
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/' + id).pipe(map(_ => void 0));
  }

  create(employee: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ => void 0));
  }
}
