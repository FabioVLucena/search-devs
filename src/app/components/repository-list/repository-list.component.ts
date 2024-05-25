import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Repository } from '../../interfaces/repository';
import { GithubService } from '../../services/github.service';
import { RepositoryCardComponent } from '../repository-card/repository-card.component';

@Component({
  selector: 'app-repository-list',
  standalone: true,
  imports: [RepositoryCardComponent, NgFor],
  templateUrl: './repository-list.component.html',
  styleUrl: './repository-list.component.css',
  providers: [GithubService],
})
export class RepositoryListComponent {
  @Input() repositories: Repository[] = [];
}
