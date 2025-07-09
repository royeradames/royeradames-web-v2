import { Component } from '@angular/core';
import skilledWithData from '@shared/data/resume/skilled-with.data';

@Component({
  selector: 'app-skilled-with',
  templateUrl: './skilled-with.html',
  styleUrl: './skilled-with.css',
  imports: [],
})
export class SkilledWith {
  public skilledWith = skilledWithData;
}
