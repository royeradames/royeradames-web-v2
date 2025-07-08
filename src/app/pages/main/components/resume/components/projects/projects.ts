import { Component } from '@angular/core';
import projectsData from '@shared/data/resume/projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  imports: [],
})
export class Projects {
  public projects = projectsData;
}
