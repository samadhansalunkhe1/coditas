import { Component } from '@angular/core';
import { GithubUserInfoService } from './github-user-info.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coditas github user search assignment';
  username;
  searchedUser = false;
  searchedUserList = [];
  userSearchForm;

  constructor(private userDataService: GithubUserInfoService) {  }

  ngOnInit() {
      this.userSearchForm = new FormGroup({
        githubUsername: new FormControl('')
    });
  }

  searchGithubUser = function (user) {
    if (user.githubUsername !== '') {
      this.userDataService.searchGithubUser(user.githubUsername)
      .subscribe(data => {
        this.searchedUser = true;
        this.username = user.githubUsername;
        this.searchedUserList = data['items'];
        console.log('user data', this.searchedUserList);
      });
    } else {
      this.searchedUser = false;
      this.searchedUserList = [];
    }
  };

  // getGitUserRepos(event) {
  //   alert('sam in ssss' + event);
  //   console.log('sam in repos', event);
  // }
}
