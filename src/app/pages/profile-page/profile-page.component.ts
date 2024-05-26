import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ProfileInfoComponent } from '../../components/profile-info/profile-info.component';
import { RepositoryListComponent } from '../../components/repository-list/repository-list.component';
import { Profile } from '../../interfaces/profile';
import { Repository } from '../../interfaces/repository';
import { GithubService } from '../../services/github.service';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    NavBarComponent,
    ProfileInfoComponent,
    RepositoryListComponent,
    LoadingComponent,
    ErrorMessageComponent,
    CommonModule,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit {
  username: string;
  errorMessage: string;
  isLoading: boolean = true;

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
        this.isLoading = false;
        this.profile = response;
      },
      error: (error: any) => {
        console.error('Error:', error);
        this.isLoading = false;
        this.errorMessage = error;
      },
    });
  }

  fetchRepositoriesData(): void {
    this.githubService.findRepositoriesByUsername(this.username).subscribe({
      next: (response: Repository[]) => {
        console.log('---------Repositories---------');
        console.log(response);
        this.isLoading = false;
        this.repositories = response;
      },
      error: (error: any) => {
        console.error('Error:', error);
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.username = routeParams.get('username');

    this.fetchProfileData();
    this.fetchRepositoriesData();
  }
}
