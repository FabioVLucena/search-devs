import { Component } from '@angular/core';
import { HeaderTitleComponent } from '../header-title/header-title.component';
import { SearchFormComponent } from '../search-form/search-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderTitleComponent, SearchFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
