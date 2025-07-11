import { Component } from '@angular/core';
import footerData from '../../../../shared/data/footer.data';
import { ResumeLinks } from '../../../../shared/components/resume-links/resume-links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  imports: [ResumeLinks],
})
export class Footer {
  public footerData = footerData;
}
