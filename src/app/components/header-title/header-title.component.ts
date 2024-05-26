import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
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

  @HostBinding('style.height') height: string = '150px';
  @HostBinding('style.width') width: string = '100%';

  @Input()
  set setHeight(height: string) {
    this.height = height;
  }

  @Input()
  set setWidth(width: string) {
    this.width = width;
  }
}
