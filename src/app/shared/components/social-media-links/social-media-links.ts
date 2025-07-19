import { Component } from '@angular/core';
import { socialMediaList } from '@shared/data/social-media.data';
import { Image } from '../image/image';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.html',
  styleUrl: './social-media-links.css',
  imports: [Image],
})
export class SocialMediaLinks {
  public socialMediaList = socialMediaList;
}
