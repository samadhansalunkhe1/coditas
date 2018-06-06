import { Component } from '@angular/core';
import { GithubUserInfoService } from './github-user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coditas github user search assignment';
  githubUserName = '';

  constructor(private userDataService: GithubUserInfoService) {  }

  searchGithubUser() {
    if (this.githubUserName !== '') {
      this.userDataService.fetchData(this.githubUserName);
    }
  }

  ngOnInit() {  }
}
