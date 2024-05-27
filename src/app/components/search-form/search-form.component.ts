import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
  @Input() justifyContent: string = 'center';

  @HostBinding('style.height') height: string = '150px';

  @Input()
  set setHeight(height: string) {
    this.height = height;
  }

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  searchForm = this.formBuilder.group({
    username: '',
  });

  redirectTo(uri: string, username: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([uri, username]);
    });
  }

  onSubmit(): void {
    this.redirectTo('perfil', this.searchForm.value.username);
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }
}
