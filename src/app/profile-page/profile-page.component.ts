import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProfileInfoComponent } from '../profile-info/profile-info.component';
import { RepositoryListComponent } from '../repository-list/repository-list.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [NavBarComponent, ProfileInfoComponent, RepositoryListComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {}
