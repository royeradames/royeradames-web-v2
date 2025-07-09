import { Component } from '@angular/core';
import { Projects } from "./components/projects/projects";
import { Experience } from "./components/experience/experience";
import { Education } from "./components/education/education";
import { SkilledWith } from "./components/skilled-with/skilled-with";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html',
  styleUrl: './resume.css',
  imports: [Projects, Experience, Education, SkilledWith],
})
export class Resume {}
