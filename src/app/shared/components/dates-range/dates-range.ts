import { Component, input } from '@angular/core';
import { Image } from '../image/image';

@Component({
  selector: 'app-dates-range',
  templateUrl: './dates-range.html',
  styleUrl: './dates-range.css',
  imports: [Image],
})
export class DatesRange {
  startDate = input.required<string>();
  endDate = input<string>();
}
