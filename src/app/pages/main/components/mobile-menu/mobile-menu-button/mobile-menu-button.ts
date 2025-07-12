import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MobileMenuService } from '../mobile-menu.service';

@Component({
  selector: 'app-mobile-menu-button',
  templateUrl: './mobile-menu-button.html',
  styleUrl: './mobile-menu-button.css',
  imports: [MatButtonModule, MatIconModule, MatSidenavModule],
})
export class MobileMenuButton {
  constructor(private mobileMenuService: MobileMenuService) {}

  toggleDrawer(): void {
    this.mobileMenuService.toggleDrawer();
  }
}
