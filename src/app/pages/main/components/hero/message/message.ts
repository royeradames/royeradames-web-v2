import { Component } from '@angular/core';
import headerData from '@shared/data/header.data';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import footerData from '@shared/data/footer.data';

@Component({
  selector: 'app-message',
  templateUrl: './message.html',
  styleUrl: './message.css',
  imports: [MatButtonModule, MatIconModule],
  standalone: true,
})
export class Message {
  public headerData = headerData;
  public resumeLinks = footerData.resumeLinks;
}
