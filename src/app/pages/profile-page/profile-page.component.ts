import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ProfileInfoComponent } from '../../components/profile-info/profile-info.component';
import { RepositoryListComponent } from '../../components/repository-list/repository-list.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [NavBarComponent, ProfileInfoComponent, RepositoryListComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  username: string = 'FabioVLucena';
}
