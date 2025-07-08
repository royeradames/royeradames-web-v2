import { Component } from '@angular/core';
import { Projects } from "./components/projects/projects";
import { Experience } from "./components/experience/experience";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html',
  styleUrl: './resume.css',
  imports: [Projects, Experience],
})
export class Resume {}
