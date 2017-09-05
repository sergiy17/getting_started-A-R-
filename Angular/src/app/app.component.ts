import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { Http } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Book shelf';

  user_signed;

  ngOnInit():void{
    if(1 != 1){
      this.user_signed = "Log in";
    }else{
      this.user_signed = "Log out";
    }
    return this.user_signed;
  }
}
