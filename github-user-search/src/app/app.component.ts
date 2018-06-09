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
  username;
  searchedUser = false;
  searchedUserList = [];
  userSearchForm;
  sortArgs: string;

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
        this.username = user.githubUsername;
         if (user.githubUserSort === 'nameAZ') {
            this.sortArgs = 'nameAZ';
         } else if (user.githubUserSort === 'nameZA') {
            this.sortArgs = 'nameZA';
         } else if (user.githubUserSort === 'nameAsc') {
            this.sortArgs = 'nameAsc';
         } else if (user.githubUserSort === 'nameDsc') {
            this.sortArgs = 'nameDsc';
         } else {
          this.sortArgs = '';
         }

         this.searchedUserList = data['items'];
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
