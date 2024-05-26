import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
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
}
