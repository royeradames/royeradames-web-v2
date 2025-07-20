import { Component, input } from '@angular/core';
import skilledWithData from '@shared/data/resume/skilled-with.data';
import { Image } from '@shared/components/image/image';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.html',
  styleUrl: './skill-list.css',
  imports: [Image],
})
export class SkillList {
  skillList = input.required<
    {
      icon: {
        name: string;
        height: number;
        width: number;
      };
      title: string;
      description: string;
      link: string;
    }[]
  >();
  title = input.required<string>();
}
