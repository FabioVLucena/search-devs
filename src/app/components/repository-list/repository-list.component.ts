import { Component, Input, OnInit } from '@angular/core';
import { Repository } from '../../interfaces/repository';
import { GithubService } from '../../github.service';
import { RepositoryCardComponent } from '../repository-card/repository-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-repository-list',
  standalone: true,
  imports: [RepositoryCardComponent, NgFor],
  templateUrl: './repository-list.component.html',
  styleUrl: './repository-list.component.css',
  providers: [GithubService],
})
export class RepositoryListComponent implements OnInit {
  @Input() username: string;
  repositories: Repository[];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService
      .findRepositoriesByUsername(this.username)
      .subscribe((response: Repository[]) => {
        console.log('Username > ' + this.username);
        this.repositories = response;
        console.log(this.repositories[0]);
      });
  }
}
