import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ProfileInfoComponent } from '../../components/profile-info/profile-info.component';
import { RepositoryListComponent } from '../../components/repository-list/repository-list.component';
import { Profile } from '../../interfaces/profile';
import { Repository } from '../../interfaces/repository';
import { GithubService } from '../../services/github.service';
import { CommonModule, NgIf } from '@angular/common';
import { LoadingComponent } from '../../components/loading/loading.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    NavBarComponent,
    ProfileInfoComponent,
    RepositoryListComponent,
    LoadingComponent,
    CommonModule,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit {
  username: string;
  errorMessage: string;

  profile: Profile;
  repositories: Repository[];

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  fetchProfileData(): void {
    this.githubService.findProfileByUsername(this.username).subscribe({
      next: (response: Profile) => {
        console.log('---------Profile---------');
        console.log(response);
        this.profile = response;
      },
      error: (error: any) => {
        console.error('Error:', error);
      },
    });
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
    const routeParams = this.route.snapshot.paramMap;
    this.username = routeParams.get('username');

    this.fetchProfileData();
    this.fetchRepositoriesData();
  }
}
