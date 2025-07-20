import { Component } from '@angular/core';
import headerData from '@shared/data/header.data';
import { Image } from '@shared/components/image/image';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import footerData from '@shared/data/footer.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  imports: [
    Image,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  standalone: true,
})
export class Contact {
  public headerData = headerData;
  public resumeLinks = footerData.resumeLinks;

  getContactLink(item: any): string {
    switch (item.type) {
      case 'email':
        return `mailto:${item.contactInfo}`;
      case 'text':
        // Remove any formatting from phone number for tel: protocol
        const phoneNumber = item.contactInfo.replace(/[^\d]/g, '');
        return `tel:+1${phoneNumber}`;
      case 'address':
        // Create a Google Maps search link
        const encodedAddress = encodeURIComponent(item.contactInfo);
        return `https://maps.google.com/maps?q=${encodedAddress}`;
      default:
        return '#';
    }
  }

  getAriaLabel(item: any): string {
    switch (item.type) {
      case 'email':
        return `Send email to ${item.contactInfo}`;
      case 'text':
        return `Text ${item.contactInfo}`;
      case 'address':
        return `View ${item.contactInfo} on map`;
      default:
        return item.title;
    }
  }
}
