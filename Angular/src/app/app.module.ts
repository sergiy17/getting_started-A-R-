import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleService } from './services/article.service';
import { ArticleComponent } from './article/article.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './users/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
