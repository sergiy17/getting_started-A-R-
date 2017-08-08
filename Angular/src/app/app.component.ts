import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'from the angular => app works!';
  articles;
  users;

  constructor(private http: Http) {
    this.getArticles();

    this.getUsers();
  }

  getArticles(){
    this.http.get('http://localhost:3000/articles')
    .subscribe(res => this.articles = res.json());
  }

  getUsers(){
    this.http.get('http://localhost:3000/users')
      .subscribe(res => this.users = res.json())
  }


}
