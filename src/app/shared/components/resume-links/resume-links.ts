import { Component } from '@angular/core';
import footerData from '../../data/footer.data';

@Component({
  selector: 'app-resume-links',
  templateUrl: './resume-links.html',
  styleUrl: './resume-links.css',
  imports: [],
})
export class ResumeLinks {
  public footerData = footerData;
}
