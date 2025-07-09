import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.html',
  styleUrl: './image.css',
  imports: [],
})
export class Image {
  src = input.required<string>();
  type = input.required<'companies-logo' | 'icons' | 'images'>();
  alt = input.required<string>();
  width = input.required<number>();
  height = input.required<number>();
  ariaHidden = input<boolean>(false);
}
