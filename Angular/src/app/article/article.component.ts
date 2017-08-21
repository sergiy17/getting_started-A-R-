import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ArticleService } from '../services/article.service';
import { Article } from './article';

@Component({
  selector: "my-articles",
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[ArticleService]
})

export class ArticleComponent implements OnInit{

  articles;
  selectedArticle:Article;

  constructor(
    private router:Router,
    private articleService:ArticleService
  ){}

  ngOnInit():void{
    this.articleService.getArticles().then(articles => this.articles = articles);
  }

  // onSelect(article:Article):void{
  //   this.selectedArticle = article;
  // }

  goToDetail(article:Article):void{
    this.selectedArticle = article;
    this.router.navigate(['/articles', this.selectedArticle.id]);
  }


  create(name:string, user_id:number, content:string):void{
    this.articleService.create(name, user_id, content)
      .then(() => {
        this.articles.push({name:name, user_id:user_id, content:content});
      });
  }
}
