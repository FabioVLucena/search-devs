import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'perfil', component: ProfilePageComponent },
    { path: '**', component: NotFoundPageComponent },
];
