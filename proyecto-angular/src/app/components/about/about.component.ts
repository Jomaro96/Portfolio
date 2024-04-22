import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  public title:string;
  public subtitle:string;
  public email:string;

  constructor(){
    this.title = "Omar Almaraz";
    this.subtitle = "Computer Systems Engineer and Fullstack Developer";
    this.email = "jomara96@outlook.com";
  }
  ngOnInit(){

  }
}
