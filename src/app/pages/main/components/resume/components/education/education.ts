import { Component } from '@angular/core';
import educationData from '@shared/data/resume/education.data';
import { Image } from '@shared/components/image/image';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.css',
  imports: [Image],
})
export class Education {
  public education = educationData;
}
