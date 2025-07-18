import { Component } from '@angular/core';
import educationData from '@shared/data/resume/education.data';
import { Image } from '@shared/components/image/image';
import { RaItem } from '@shared/components/ra-item/ra-item';
import { DatesRange } from '@shared/components/dates-range/dates-range';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.css',
  imports: [Image, RaItem, DatesRange],
})
export class Education {
  public dataList = educationData;
}
