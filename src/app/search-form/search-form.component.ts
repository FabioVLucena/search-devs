import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent {

  constructor(private formBuilder: FormBuilder) { }

  searchForm = this.formBuilder.group({
    username: '',
  });

  onSubmit(): void {
    console.warn('Your submit body', this.searchForm.value);
    this.searchForm.reset();
  }
}
