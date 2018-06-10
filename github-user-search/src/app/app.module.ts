import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { GithubUserInfoService } from './github-user-info.service';
import { SortPipe } from './app.sort';

@NgModule({
  declarations: [
    SortPipe,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [GithubUserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
