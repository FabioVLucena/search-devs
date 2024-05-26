import { Component } from '@angular/core';
import { HeaderTitleComponent } from '../header-title/header-title.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [HeaderTitleComponent, SearchFormComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
