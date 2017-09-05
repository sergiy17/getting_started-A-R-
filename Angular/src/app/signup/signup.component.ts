import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { SignUpService } from "../services/signup.service";


@Component({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[SignUpService]

})
export class SignUpComponent implements OnInit{

  constructor(
    private router: Router,
    private signupService: SignUpService

  ){}

  ngOnInit():void{
    // this.userService.getUsers().then(users => this.users = users);
  }

  greeting_msg = "The user was successfully created!"

  create(first_name:string, last_name:string, email:string, password:string):void{
    console.log(password);
    this.signupService.create(first_name, last_name, email, password)
      .then(() => {
        console.log(this.greeting_msg);
      });
  }

}
