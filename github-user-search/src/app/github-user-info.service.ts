import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubUserInfoService {

  constructor(private http: Http) { }

  fetchData(userName) {
    this.http.get('https://api.github.com/search/users?q=' + userName).map(
      (response) => response.json()
    ).subscribe(
      (data) => console.log(data)
    );
  }
}
