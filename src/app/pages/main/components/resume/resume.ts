import { Component } from '@angular/core';
import { Projects } from "./components/projects/projects";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html',
  styleUrl: './resume.css',
  imports: [Projects],
})
export class Resume {}
