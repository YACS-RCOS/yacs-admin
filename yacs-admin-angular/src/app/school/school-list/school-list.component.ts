import { Component, OnInit } from '@angular/core';
import { School } from '../school';

//Dummy data, delete when YACS service integrated
const SCHOOLS: School[] =[
  {id: 1, name: 'School of Humanities, Arts, and Social Sciences', departments: []},
  {id: 2, name: 'School of Engineering', departments: []},
  {id: 3, name: 'School of Science', departments: []},
  {id: 4, name: 'School of Architecture',departments:[]}
];

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
