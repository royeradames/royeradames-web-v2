import { Component } from '@angular/core';
import headerData from '@shared/data/header.data';
import { SocialMediaLinks } from '@shared/components/social-media-links/social-media-links';
import { Image } from '@shared/components/image/image';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationLinks } from './navigation-links/navigation-links';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobileMenuButton } from '../mobile-menu/mobile-menu-button/mobile-menu-button';
import { RouterLink } from '@angular/router';
import footerData from '@shared/data/footer.data';
import { Positions } from "./positions/positions";
import { Message } from "./message/message";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  imports: [
    SocialMediaLinks,
    Image,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    NavigationLinks,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MobileMenuButton,
    RouterLink,
    Positions,
    Message
],
  standalone: true,
})
export class Hero {
  public headerData = headerData;
  public resumeLinks = footerData.resumeLinks;
}
