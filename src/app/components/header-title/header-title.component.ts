import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-title',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-title.component.html',
  styleUrl: './header-title.component.css',
})
export class HeaderTitleComponent {
  @Input() fontSize: number | undefined;
  @Input() fontWeight: number | undefined;
}
