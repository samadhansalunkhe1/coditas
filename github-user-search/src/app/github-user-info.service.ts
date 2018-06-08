import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Rx';

@Injectable()
export class GithubUserInfoService {

  constructor(private httpClient: HttpClient) { }

  searchGithubUser(userName) {
    return this.httpClient.get('https://api.github.com/search/users?q=' + userName);
  }
}
