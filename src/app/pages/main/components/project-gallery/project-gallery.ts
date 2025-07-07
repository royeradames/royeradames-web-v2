import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import projectGallery from '../../../../shared/data/project-gallery.data';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.html',
  styleUrl: './project-gallery.css',
  imports: [],
})
export class ProjectGallery {
  public projectGallery = projectGallery;
}
