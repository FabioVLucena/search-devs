import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Profile } from '../interfaces/profile';
import { Repository } from '../interfaces/repository';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private baseUrl = 'https://api.github.com';

  constructor(private httpClient: HttpClient) {}

  private sortRepositoriesByStars(repositories: Repository[]): Repository[] {
    return repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }

  findProfileByUsername(username: string): Observable<Profile> {
    return this.httpClient
      .get<Profile>(`${this.baseUrl}/users/${username}`)
      .pipe(
        map((response: Profile) => {
          return response;
        }),
        catchError((error) => {
          console.error('Error:', error);
          return throwError(() => new Error('Usuário não encontrado'));
        })
      );
  }

  findRepositoriesByUsername(username: string): Observable<Repository[]> {
    return this.httpClient
      .get<Repository[]>(`${this.baseUrl}/users/${username}/repos`)
      .pipe(
        map((response: Repository[]) => this.sortRepositoriesByStars(response)),
        catchError((error: any) => {
          console.error('Error:', error);
          return throwError(() => new Error('Nenhum repositório encontrado'));
        })
      );
  }
}
