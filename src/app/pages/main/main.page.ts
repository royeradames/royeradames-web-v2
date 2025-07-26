import { Component } from '@angular/core';
import { MobileMenu } from './components/mobile-menu/mobile-menu';
import { Hero } from './components/hero/hero';
import { ProjectGallery } from './components/project-gallery/project-gallery';
import { Resume } from './components/resume/resume';
import { Footer } from './components/footer/footer';
import { SocialMediaLinks } from '@shared/components/social-media-links/social-media-links';
import { MobileMenuButton } from './components/mobile-menu/mobile-menu-button/mobile-menu-button';
import { NavigationLinks } from './components/hero/navigation-links/navigation-links';
import { Image } from '@shared/components/image/image';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import headerData from '@shared/data/header.data';

@Component({
  selector: 'page-main',
  templateUrl: './main.page.html',
  styleUrl: './main.page.css',
  imports: [
    Hero,
    ProjectGallery,
    Resume,
    Footer,
    MobileMenu,
    SocialMediaLinks,
    MobileMenuButton,
    NavigationLinks,
    Image,
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
  ],
})
export class MainPage {
  public headerData = headerData;
}
