import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent }   from './article/article.component';
import { UserComponent }  from './users/user.component';
import { ArticleDetailComponent }  from './article-detail.component/article-detail.component';

const routes: Routes = [
  { path: 'articles',         component: ArticleComponent },
  { path: "users",            component: UserComponent },
  { path: "",                 redirectTo: "/articles", pathMatch: 'full' },
  { path: 'articles/:id',     component: ArticleDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:  [RouterModule]
})


export class AppRoutingModule{

}
