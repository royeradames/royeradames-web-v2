import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import headerData from '../../shared/data/header.data';
import { Hero } from './components/hero/hero';
@Component({
  selector: 'page-main',
  templateUrl: './main.page.html',
  styleUrl: './main.page.css',
  imports: [
    // MainNavigation,
    RouterLink,
    NgFor,
    Hero,
  ],
})
export class MainPage {
  public headerData = headerData;
}
