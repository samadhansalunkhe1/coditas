import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive, ElementRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { GithubUserInfoService } from './github-user-info.service';
import { SortPipe } from './app.sort';
import { MyAttributeDirective } from './custom-directive/hover-directive';

@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    MyAttributeDirective
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
