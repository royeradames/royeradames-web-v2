import { Component } from '@angular/core';
import experienceData from '@shared/data/resume/experience.data';
import { Image } from '@shared/components/image/image';
import { RaItem } from "@shared/components/ra-item/ra-item";
import { DatesRange } from "@shared/components/dates-range/dates-range";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  imports: [Image, RaItem, DatesRange],
})
export class Experience {
  public dataList = experienceData;
}
