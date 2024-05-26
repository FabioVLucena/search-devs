import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Repository } from '../../interfaces/repository';

@Component({
  selector: 'app-repository-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repository-card.component.html',
  styleUrl: './repository-card.component.css',
})
export class RepositoryCardComponent {
  @Input() repository: Repository;

  isSameDay(updatedAt: Date): boolean {
    const teste = new Date(updatedAt);
    const currentDate = new Date();

    teste.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    return currentDate.getDate() === teste.getDate();
  }

  calculateDaysDifference(updatedAt: Date): number {
    const teste = new Date(updatedAt);
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - teste.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  calculateHoursDifference(updatedAt: Date): number {
    const teste = new Date(updatedAt);
    const currentDate = new Date();

    const diffInMilliseconds = Math.abs(
      currentDate.getTime() - teste.getTime()
    );
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
    return Math.floor(diffInHours);
  }
}
