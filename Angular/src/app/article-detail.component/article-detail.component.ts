import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { ArticleService } from '../services/article.service';
import { Article } from '../article/article';


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
      .subscribe(article => this.article = article)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.articleService.update(this.article)
      .then(() => this.goBack());
  }
}
