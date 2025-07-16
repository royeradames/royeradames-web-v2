import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ra-item',
  templateUrl: './ra-item.html',
  styleUrl: './ra-item.css',
  imports: [],
})
export class RaItem {
  isLast = input.required<boolean>();
}
