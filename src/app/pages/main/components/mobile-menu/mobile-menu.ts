import { Component, ViewChild, AfterViewInit } from '@angular/core';
import headerData from '@shared/data/header.data';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { SocialMediaLinks } from '@shared/components/social-media-links/social-media-links';
import { ResumeLinks } from '@shared/components/resume-links/resume-links';
import { NavigationLinks } from '../hero/navigation-links/navigation-links';
import { MobileMenuService } from './mobile-menu.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.css',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    SocialMediaLinks,
    ResumeLinks,
    NavigationLinks,
  ],
})
export class MobileMenu implements AfterViewInit {
  @ViewChild('drawer') drawer!: MatSidenav;

  public headerData = headerData;

  constructor(private mobileMenuService: MobileMenuService) {}

  ngAfterViewInit(): void {
    this.mobileMenuService.setDrawer(this.drawer);
  }

  toggleDrawer(): void {
    this.mobileMenuService.toggleDrawer();
  }
}
