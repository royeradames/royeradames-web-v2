import { Component } from '@angular/core';
import educationData from '@shared/data/resume/education.data';
import { Image } from '@shared/components/image/image';
import { RaItem } from "@shared/components/ra-item/ra-item";

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.css',
  imports: [Image, RaItem],
})
export class Education {
  public education = educationData;
}
