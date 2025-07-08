import { Component } from '@angular/core';
import footerData from '../../data/footer.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  imports: [],
})
export class Footer {
  public footerData = footerData;
}
