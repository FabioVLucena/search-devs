import { Component } from '@angular/core';
import { HeaderTitleComponent } from '../../components/header-title/header-title.component';
import { SearchFormComponent } from '../../components/search-form/search-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderTitleComponent, SearchFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
