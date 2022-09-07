import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import {Observable} from "rxjs";
import {ProjectsModel} from "../../model/projects.model";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent {
  data$: Observable<ProjectsModel[]> = this._projectsService.getAll();

  constructor(private _projectsService: ProjectsService) {
  }
}
