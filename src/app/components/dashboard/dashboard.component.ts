import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  menuItems = [{
    title: 'My applications',
    description: 'View, edit and submit my applications',
    routerLink:'/my-applications'
  },
  {
    title: 'My documents',
    description: 'View and pay my documents',
    routerLink:'/my-documents'
  }
]

applyMenuItems = [
  {
    title: 'State Owned Lands Application',
    description: 'If you are a contractor, or a property owner, and plan to undertake new construction or renovation work on that property, you can apply for the construction permit here.',
    routerLink:'/lands-application'
  },
  {
    title: 'Apply for a Right-of-Way Permit',
    description: 'You can apply for a right-of-way permit if you are an entity or organization that requires access to, or use of, the public right-of-way for a specific purpose.',
    routerLink:'/permit'
  }
  ]
}


