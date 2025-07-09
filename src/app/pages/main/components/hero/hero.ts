import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import headerData from '../../../../shared/data/header.data';
import { SocialMediaLinks } from '../../../../shared/components/social-media-links/social-media-links';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  imports: [RouterLink, SocialMediaLinks],
})
export class Hero {
  public headerData = headerData;
}
