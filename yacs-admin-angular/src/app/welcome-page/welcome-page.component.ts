import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  private indexHeader = require("../../assets/images/index_header.png");

  constructor() { }

  ngOnInit() {
  }

}
