import { Component } from '@angular/core';
import { GithubUserInfoService } from './github-user-info.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coditas github user search assignment';
  invalidUname;
  userId = '';
  searchedUser = false;
  searchedUserList = [];
  userSearchForm;
  searchedUserListCount;
  sortArgs = '';
  githubUserRepos = [];
  emptyRepoMessage = '';

  constructor(private userDataService: GithubUserInfoService) {  }

  ngOnInit() {
      this.userSearchForm = new FormGroup({
        githubUsername: new FormControl(''),
        githubUserSort: new FormControl('')
    });
  }

  searchGithubUser = function (user) {
    if (user.githubUsername !== '') {
      this.userDataService.searchGithubUser(user.githubUsername)
      .subscribe(data => {
        this.searchedUser = true;
        /* Set searched username to show invalid username message */
        this.invalidUname = user.githubUsername;
        /* Set selected sort option to sortArgs variable */
        this.sortArgs = user.githubUserSort;
        /* Set searched users list array */
        this.searchedUserList = data['items'];
        this.searchedUserListCount = data['items'].length;
        console.log('result', this.searchedUserList);
      });
    } else {
      this.searchedUser = false;
      this.searchedUserList = [];
    }
  };

  getGithubUserRepos = function (username, event) {
      this.userId = event.target.id;
      this.githubUserRepos = [];
      this.emptyRepoMessage = '';
      this.userDataService.getGithubUserRepos(username)
      .subscribe(data => {
        this.githubUserRepos = data;
        if (this.githubUserRepos.length > 0) {
          if (event.target.value === 'Details') {
            event.target.value = 'Collapse';
          } else {
            event.target.value = 'Details';
          }
        } else {
          this.emptyRepoMessage = 'Not any repository created on Gitub';
        }
      });
  };
}
