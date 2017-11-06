import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'YACS Admin';
  constructor(private router: Router, private titleService: Title) {}
  ngOnInit() {
    this.titleService.setTitle(this.title);
}
}
