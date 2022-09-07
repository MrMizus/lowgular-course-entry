import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {ProjectsModel} from "../model/projects.model";

@Injectable()
export class ProjectsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProjectsModel[]> {
    return this._httpClient.get<ProjectsModel[]>("assets/data/projects.json");
  }
}
