import { Component, Input } from '@angular/core';
import { Profile } from '../../interfaces/profile';
import { IconTextComponent } from '../icon-text/icon-text.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-info-mobile',
  standalone: true,
  imports: [IconTextComponent, CommonModule],
  templateUrl: './profile-info-mobile.component.html',
  styleUrl: './profile-info-mobile.component.css',
})
export class ProfileInfoMobileComponent {
  @Input() profile: Profile;
}
