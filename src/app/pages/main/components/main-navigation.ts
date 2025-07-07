import { Component, Input } from '@angular/core';
import { TNavigationLinks } from '../../../shared/data/header.data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-navigation',
  // imports: [NgFor],
  templateUrl: './main-navigation.html',
  styleUrl: './main-navigation.css',
})
export class MainNavigation {
  // Input() navigationLinks: TNavigationLinks
}
