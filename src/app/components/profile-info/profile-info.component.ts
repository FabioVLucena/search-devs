import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../interfaces/profile';
import { GithubService } from '../../github.service';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css',
})
export class ProfileInfoComponent implements OnInit {
  @Input() username: string;
  profile: Profile;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService
      .findProfileByUsername(this.username)
      .subscribe((data: Profile) => {
        this.profile = data;
        console.log(this.profile);
      });
  }
}
