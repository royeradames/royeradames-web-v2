import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class MobileMenuService {
  private drawer: MatSidenav | null = null;

  setDrawer(drawer: MatSidenav): void {
    this.drawer = drawer;
  }

  toggleDrawer(): void {
    if (!this.drawer) {
      return;
    }
    this.drawer.toggle();
  }

  openDrawer(): void {
    if (!this.drawer) {
      return;
    }
    this.drawer.open();
  }

  closeDrawer(): void {
    if (!this.drawer) {
      return;
    }
    this.drawer.close();
  }
}
