import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { User } from '../users/user';

@Injectable()

export class SignUpService{

  // articles;

  constructor(private http: Http) {}

  private baseUrl = "http://localhost:3000/";

  private headers = new Headers({
    'Content-Type': 'application/json'
    // 'Accept': 'application/json'
    });

  private handleError(error: any): Promise<any> {
    console.error('FUCK, some error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // getArticles(): Promise<Article[]>{
  //   return this.http.get(this.baseUrl + 'articles.json')
  //     .toPromise()
  //     .then(response => response.json());
  // }

  // getArticle(id: number): Promise<Article> {
  //   const url = this.baseUrl +'articles/' + id;
  //   // const url = 'http://localhost:3000/articles/2';
  //   console.log(url);
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json())
  //     .catch(this.handleError);

  // }

  create(first_name:string, last_name:string, email:string, password:string): Promise<User>{
    const url = this.baseUrl + "signup";
    return this.http
      .post(url, JSON.stringify({first_name:first_name, last_name:last_name, email:email, password_digest:password}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as User)
      .catch(this.handleError);
  }

  // delete(id:number): Promise<Article>{
  //   const url = this.baseUrl + "articles/" + id;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

  // update(article:Article): Promise<Article>{
  //   const url = this.baseUrl + "articles/" + article.id;
  //   return this.http
  //     .put(url, JSON.stringify(article), {headers: this.headers})
  //     .toPromise()
  //     .then(() => article)
  //     .catch(this.handleError)
  // }
}
