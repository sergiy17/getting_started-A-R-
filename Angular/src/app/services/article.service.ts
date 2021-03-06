import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { Article } from '../article/article';

@Injectable()

export class ArticleService{

  articles;

  constructor(private http: Http) {}

  private baseUrl = "http://localhost:3000/";

  private headers = new Headers({'Content-Type': 'application/json'});

  private handleError(error: any): Promise<any> {
    console.error('FUCK, some error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getArticles(): Promise<Article[]>{
    return this.http.get(this.baseUrl + 'articles.json')
      .toPromise()
      .then(response => response.json());
  }

  getArticle(id: number): Promise<Article> {
    const url = this.baseUrl +'articles/' + id;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);

  }

  create(name:string, user_id:number, content:string): Promise<Article>{
    const url = this.baseUrl + "articles";
    return this.http
      .post(url, JSON.stringify({name:name, user_id:user_id, content:content}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Article)
      .catch(this.handleError);
  }

  delete(id:number): Promise<Article>{
    const url = this.baseUrl + "articles/" + id;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  update(article:Article): Promise<Article>{
    const url = this.baseUrl + "articles/" + article.id;
    return this.http
      .put(url, JSON.stringify(article), {headers: this.headers})
      .toPromise()
      .then(() => article)
      .catch(this.handleError)
  }
}
