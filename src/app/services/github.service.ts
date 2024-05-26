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

  findProfileByUsername(username: string): Observable<Profile> {
    return this.httpClient
      .get<Profile>(this.baseUrl + '/users/' + username)
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
      .get<Repository[]>(this.baseUrl + '/users/' + username + '/repos')
      .pipe(
        map((response: Repository[]) => {
          response.sort((a, b) => {
            if (a.stargazers_count < b.stargazers_count) {
              return 1;
            }
            if (a.stargazers_count > b.stargazers_count) {
              return -1;
            }
            return 0;
          });
          return response;
        }),
        catchError((error: any) => {
          console.error('Error:', error);
          return throwError(() => new Error('Nenhum repositório encontrado'));
        })
      );
  }
}
