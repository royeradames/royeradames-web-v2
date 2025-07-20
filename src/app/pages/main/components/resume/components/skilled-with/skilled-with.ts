import { Component } from '@angular/core';
import skilledWithData from '@shared/data/resume/skilled-with.data';
import { SkillList } from '../../../hero/skill-list/skill-list';

@Component({
  selector: 'app-skilled-with',
  templateUrl: './skilled-with.html',
  styleUrl: './skilled-with.css',
  imports: [SkillList],
})
export class SkilledWith {
  public skilledWithSection = skilledWithData;
}
