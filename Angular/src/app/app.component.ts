import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'from the angular => app works!';
  books;
  users;

  constructor(private http: Http) {
    this.getBook();

    this.getUsers();
  }

  getBook(){
    this.http.get('http://localhost:3000/books')
    .subscribe(res => this.books = res.json());
  }

  getUsers(){
    this.http.get('http://localhost:3000/users')
      .subscribe(res => this.users = res.json())
  }


}
