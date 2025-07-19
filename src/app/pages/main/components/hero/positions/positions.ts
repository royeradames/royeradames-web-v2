import { Component } from '@angular/core';
import headerData from '@shared/data/header.data';
@Component({
  selector: 'app-positions',
  templateUrl: './positions.html',
  styleUrl: './positions.css',
  imports: [],
  standalone: true,
})
export class Positions {
  titleDescription = headerData.hero.titleDescription;
}
