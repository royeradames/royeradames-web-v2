import { Component } from '@angular/core';
import { socialMediaList } from '../../data/social-media.data';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.html',
  styleUrl: './social-media-links.css',
  imports: [],
})
export class SocialMediaLinks {
  public socialMediaList = socialMediaList;
}
