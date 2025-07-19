import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Image } from '@shared/components/image/image';
import headerData from '@shared/data/header.data';
@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.html',
  styleUrl: './navigation-links.css',
  imports: [RouterLink, Image, RouterLinkActive],
})
export class NavigationLinks {
  public headerData = headerData;
}
