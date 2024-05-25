import { Component, Input } from '@angular/core';
import { Profile } from '../../interfaces/profile';
import { IconTextComponent } from '../icon-text/icon-text.component';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [IconTextComponent],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css',
})
export class ProfileInfoComponent {
  @Input() profile: Profile;
}
