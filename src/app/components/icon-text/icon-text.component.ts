import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-text.component.html',
  styleUrl: './icon-text.component.css',
})
export class IconTextComponent {
  @Input() iconUrl: string;
  @Input() label: string;
  @Input() href: string;
}
