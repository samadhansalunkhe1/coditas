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
  searchedUser = false;
  searchedUserList = [];
  userSearchForm;
  searchedUserListCount;
  sortArgs = '';

  constructor(private userDataService: GithubUserInfoService) {  }

  ngOnInit() {
      this.userSearchForm = new FormGroup({
        githubUsername: new FormControl(''),
        githubUserSort: new FormControl('')
    });
  }

  /* Search and maintain github user info */
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

        /* Fetch users repos and append in searched user data array */
        data['items'].forEach(item => {
          item.repos = [];
          this.userDataService.getGithubUserRepos(item.login).subscribe((result) => {
            item.repos = result;
          });
        });
        console.log('All data', data);
      });
    } else {
      this.searchedUser = false;
      this.searchedUserList = [];
    }
  };

  /* Update collapse button name */
  changeCollapseBtnText(event) {
    if (event.target.value === 'Details') {
      event.target.value = 'Collapse';
    } else {
      event.target.value = 'Details';
    }
  }
}
