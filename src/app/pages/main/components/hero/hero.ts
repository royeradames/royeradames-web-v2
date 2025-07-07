import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import headerData from '../../../../shared/data/header.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  imports: [
    // MainNavigation,
    RouterLink,
    NgFor,
  ],
})
export class Hero {
  public headerData = headerData;
}
