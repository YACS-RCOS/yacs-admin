import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { SCHOOLS } from '../../mock-data';
//Dummy data, delete when YACS service integrated


@Component({
  selector: 'school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools=SCHOOLS;
  constructor() { }

  ngOnInit() {
  }

}
