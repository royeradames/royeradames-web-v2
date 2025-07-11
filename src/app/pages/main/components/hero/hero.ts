import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import headerData from '../../../../shared/data/header.data';
import { SocialMediaLinks } from '../../../../shared/components/social-media-links/social-media-links';
import { Image } from '../../../../shared/components/image/image';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { ResumeLinks } from '../../../../shared/components/resume-links/resume-links';
import { NavigationLinks } from './navigation-links/navigation-links';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  imports: [
    RouterLink,
    SocialMediaLinks,
    Image,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    ResumeLinks,
    NavigationLinks,
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class Hero {
  public headerData = headerData;

  mode = new FormControl('over' as MatDrawerMode);
}
