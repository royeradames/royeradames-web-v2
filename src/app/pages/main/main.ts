import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainNavigation } from './components/main-navigation';
import headerData from '../../shared/data/header.data';
@Component({
  selector: 'page-main',
  templateUrl: './main.html',
  styleUrl: './main.css',
  imports: [
    // MainNavigation,
    RouterLink,
    NgFor,
    NgIf,
  ],
})
export class Main {
  public headerData = headerData;
}
