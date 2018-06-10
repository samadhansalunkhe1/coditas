import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubUserInfoService {

  constructor(private httpClient: HttpClient) { }

  /* Search github user and return records */
  searchGithubUser(userName) {
    return this.httpClient.get('https://api.github.com/search/users?q=' + userName);
  }

  getGithubUserRepos(userName) {
    return this.httpClient.get('https://api.github.com/users/' + userName + '/repos');
  }
}
