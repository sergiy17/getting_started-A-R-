import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";


@Component({
  selector: 'my-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]

})
export class UserComponent implements OnInit{
  title = 'Users:';
  users;

  constructor(
    private router: Router,
    private userService: UserService

  ){}

  ngOnInit():void{
    this.userService.getUsers().then(users => this.users = users);
  }

}
