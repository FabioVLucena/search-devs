import { Component, Input } from '@angular/core';
import { Profile } from '../../interfaces/profile';
import { Repository } from '../../interfaces/repository';

@Component({
  selector: 'app-repository-card',
  standalone: true,
  imports: [],
  templateUrl: './repository-card.component.html',
  styleUrl: './repository-card.component.css',
})
export class RepositoryCardComponent {
  @Input() repository: Repository;
}
