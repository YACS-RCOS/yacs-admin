import { Component, OnInit, Input } from '@angular/core';
import {Department} from '../department';
import {SCHOOLS} from '../../mock-data';
@Component({
  selector: 'department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  @Input() dept: Department;
 

  schools = SCHOOLS;
  constructor() { }

  ngOnInit() {

  }

}
