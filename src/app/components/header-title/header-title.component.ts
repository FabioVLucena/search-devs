import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-title.component.html',
  styleUrl: './header-title.component.css',
})
export class HeaderTitleComponent {
  @Input() fontSize: number | undefined;
  @Input() fontWeight: number | undefined;
}
