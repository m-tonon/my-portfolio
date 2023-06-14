import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { langIcons, toolIcons } from '../../data/skill-icons';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  projects: any[] = [
    {
      title: 'Ecommerce Shop',
      description: 'A simple ecommerce shop built with Angular and Firebase',
      image: '../../assets/img/demo-shop.png',
      repository: 'https://github.com/m-tonon/e-commerce-demo',
      url: 'https://e-commerce-demo-umber.vercel.app/',
      technologies: [
        '../../assets/svg/angular.svg',
        '../../assets/svg/typescript.svg',
        '../../assets/svg/firebase.svg',
        '../../assets/svg/tailwind.svg',
      ],
    },
    {
      title: 'Business Dashboard',
      description: 'A business dashboard built with Angular and Firebase',
      image: '../../assets/img/dashboard.png',
      repository: 'https://github.com/m-tonon/angular-net-dashboard',
      url: 'https://angular-dotnet-dashboard.vercel.app/',
      technologies: [
        '../../assets/svg/angular.svg',
        '../../assets/svg/typescript.svg',
        '../../assets/svg/net-core.svg',
        '../../assets/svg/c-sharp.svg',
        '../../assets/svg/postgre.svg',
        '../../assets/svg/bootstrap.svg',
      ],
    }
  ];

  ngOnInit(): void {}
}
