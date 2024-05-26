import { Component, Input } from '@angular/core';
import { Profile } from '../../interfaces/profile';
import { IconTextComponent } from '../icon-text/icon-text.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [IconTextComponent, CommonModule],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css',
})
export class ProfileInfoComponent {
  @Input() profile: Profile;
}
