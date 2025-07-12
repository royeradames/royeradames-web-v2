import { Component } from '@angular/core';
import experienceData from '@shared/data/resume/experience.data';
import { Image } from '@shared/components/image/image';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  imports: [Image],
})
export class Experience {
  public experience = experienceData;
}
