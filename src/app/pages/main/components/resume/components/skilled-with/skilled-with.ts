import { Component } from '@angular/core';
import skilledWithData from '@shared/data/resume/skilled-with.data';
import { Image } from '@shared/components/image/image';
import resumeAnchorLinks from '@shared/data/resume-anchor-links.data';

@Component({
  selector: 'app-skilled-with',
  templateUrl: './skilled-with.html',
  styleUrl: './skilled-with.css',
  imports: [Image],
})
export class SkilledWith {
  public skilledWithSection = skilledWithData;
}
