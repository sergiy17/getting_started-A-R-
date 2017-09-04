import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleService } from './services/article.service';
import { ArticleComponent } from './article/article.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './users/user.component';
import { ArticleDetailComponent } from './article-detail.component/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    UserComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
