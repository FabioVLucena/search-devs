import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css',
})
export class NotFoundPageComponent {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['home']);
  }
}
