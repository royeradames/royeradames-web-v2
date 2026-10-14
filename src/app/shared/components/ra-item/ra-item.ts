import { Component, input } from '@angular/core';

@Component({
  selector: 'li[app-ra-item]',
  templateUrl: './ra-item.html',
  styleUrl: './ra-item.css',
  imports: [],
  host: {
    class: 'item',
  },
})
export class RaItem {
  isLast = input.required<boolean>();
}
