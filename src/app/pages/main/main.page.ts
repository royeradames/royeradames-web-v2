import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import headerData from '../../shared/data/header.data';
import { Hero } from './components/hero/hero';
import { ProjectGallery } from './components/project-gallery/project-gallery';
import { Footer } from './components/footer/footer';
import { Resume } from './components/resume/resume';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SocialMediaLinks } from "../../shared/components/social-media-links/social-media-links";
import { ResumeLinks } from "../../shared/components/resume-links/resume-links";
import { NavigationLinks } from "./components/hero/navigation-links/navigation-links";

@Component({
  selector: 'page-main',
  templateUrl: './main.page.html',
  styleUrl: './main.page.css',
  imports: [
    Hero,
    ProjectGallery,
    Footer,
    Resume,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    SocialMediaLinks,
    ResumeLinks,
    NavigationLinks
],
})
export class MainPage {
  public headerData = headerData;
}
