import { TestBed, inject } from '@angular/core/testing';

import { GithubUserInfoService } from './github-user-info.service';

describe('GithubUserInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubUserInfoService]
    });
  });

  it('should be created', inject([GithubUserInfoService], (service: GithubUserInfoService) => {
    expect(service).toBeTruthy();
  }));
});
