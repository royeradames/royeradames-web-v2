import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Image } from '@shared/components/image/image';
@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.html',
  styleUrl: './navigation-links.css',
  imports: [RouterLink, Image, RouterLinkActive],
  standalone: true,
})
export class NavigationLinks {
  linkList = input.required<
    {
      name: string;
      link: string;
      isExternal: boolean;
    }[]
  >();

  isAnchorLink(link: string): boolean {
    return link.startsWith('#');
  }
}
