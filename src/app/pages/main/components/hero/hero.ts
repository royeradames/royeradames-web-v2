import { Component } from '@angular/core';
import headerData from '@shared/data/header.data';
import { Image } from '@shared/components/image/image';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationLinks } from './navigation-links/navigation-links';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import footerData from '@shared/data/footer.data';
import { Positions } from './positions/positions';
import { Message } from './message/message';
import { SkillList } from './skill-list/skill-list';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  imports: [
    Image,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    NavigationLinks,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    Positions,
    Message,
    SkillList,
    Contact,
  ],
  standalone: true,
})
export class Hero {
  public headerData = headerData;
  public resumeLinks = footerData.resumeLinks;
}
