import { Component } from '@angular/core';
import footerData from '@shared/data/footer.data';
import { NavigationLinks } from '../hero/navigation-links/navigation-links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  imports: [NavigationLinks],
})
export class Footer {
  public footerData = footerData;
  public resumeLinks = footerData.resumeLinks;
}
