import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { langIcons, toolIcons } from '../../data/skill-icons';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnInit {
  @Input() langIcons: any;
  @Input() toolIcons: any;
  scrolling: boolean;

  ngOnInit() {
    this.langIcons = langIcons;
    this.toolIcons = toolIcons;
  }

  constructor() {
    this.scrolling = false;
  }

  @HostListener('window:scroll')
  handleScroll() {
    // const scrollPosition = window.scrollY;
    // console.log(scrollPosition);
    console.log(this.scrolling);
    this.scrolling = true;
  }
}
