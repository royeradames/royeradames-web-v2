import { Component } from '@angular/core';
import educationData from '@shared/data/resume/education.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.css',
  imports: [],
})
export class Education {
  public education = educationData;
}
