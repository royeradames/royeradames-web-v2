import { Component } from '@angular/core';
import projectsData from '@shared/data/resume/projects.data';
// import { Image } from '@shared/components/image/image';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  // imports: [Image],
})
export class Projects {
  public projects = projectsData;
}
