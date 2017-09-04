import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from '../article/article';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})

export class ArticleDetailComponent implements OnInit{
  @Input() article: Article;

  constructor(
    private articleService :ArticleService,
    private route :ActivatedRoute,
    private location :Location
  ){}

  ngOnInit(): void{
    this.route.paramMap
      .switchMap((params: ParamMap) => this.articleService.getArticle(+params.get('id')))
      .subscribe(article => {console.log(article); this.article = article;})
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.articleService.update(this.article)
      .then(() => this.goBack());
  }

  // save(): void {
  //   this.articleService.update(this.article)
  //     .then(() => this.goBack());
  // }
}
