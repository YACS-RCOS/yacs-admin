import { Component, OnInit, Input } from '@angular/core';
import {Department} from '../department';
@Component({
  selector: 'department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  @Input() dept: Department;
  
  constructor() { }

  ngOnInit() {
  }

}
