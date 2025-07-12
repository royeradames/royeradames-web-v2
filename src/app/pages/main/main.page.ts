import { Component } from '@angular/core';
import { MobileMenu } from './components/mobile-menu/mobile-menu';
import { Hero } from './components/hero/hero';
import { ProjectGallery } from './components/project-gallery/project-gallery';
import { Resume } from './components/resume/resume';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'page-main',
  templateUrl: './main.page.html',
  styleUrl: './main.page.css',
  imports: [Hero, ProjectGallery, Resume, Footer, MobileMenu],
})
export class MainPage {}
