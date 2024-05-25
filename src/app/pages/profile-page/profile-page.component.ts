import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ProfileInfoComponent } from '../../components/profile-info/profile-info.component';
import { RepositoryListComponent } from '../../components/repository-list/repository-list.component';
import { Profile } from '../../interfaces/profile';
import { Repository } from '../../interfaces/repository';
import { GithubService } from '../../services/github.service';
import { NgIf } from '@angular/common';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    NavBarComponent,
    ProfileInfoComponent,
    RepositoryListComponent,
    LoadingComponent,
    NgIf,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit {
  username: string = 'FabioVLucena';

  profile: Profile;
  repositories: Repository[];

  constructor(private githubService: GithubService) {}

  fetchProfileData(): void {
    this.githubService.findProfileByUsername(this.username).subscribe(
      (response: Profile) => {
        console.log('---------Profile---------');
        console.log(response);
        this.profile = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  fetchRepositoriesData(): void {
    this.githubService.findRepositoriesByUsername(this.username).subscribe(
      (response: Repository[]) => {
        console.log('---------Repositories---------');
        console.log(response);
        this.repositories = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  ngOnInit(): void {
    this.fetchProfileData();
    this.fetchRepositoriesData();
  }
}
