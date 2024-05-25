import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './interfaces/profile';
import { Repository } from './interfaces/repository';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private baseUrl = 'https://api.github.com';

  constructor(private httpClient: HttpClient) {}

  findProfileByUsername(username: string): Observable<Profile> {
    return this.httpClient.get<Profile>(this.baseUrl + '/users/' + username);
  }

  findRepositoriesByUsername(username: string): Observable<Repository[]> {
    return this.httpClient.get<Repository[]>(
      this.baseUrl + '/users/' + username + '/repos'
    );
  }
}
