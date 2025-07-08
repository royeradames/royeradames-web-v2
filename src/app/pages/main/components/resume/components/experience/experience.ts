import { Component } from '@angular/core';
import experienceData from '@shared/data/resume/experience.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  imports: [],
})
export class Experience {
  public experience = experienceData;
}
