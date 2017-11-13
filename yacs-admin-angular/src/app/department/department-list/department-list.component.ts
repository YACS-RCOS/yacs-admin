import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import {SCHOOLS, DEPTS} from '../../mock-data';

@Component({
  selector: 'department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})



export class DepartmentListComponent implements OnInit {
  departments = DEPTS;
  schools=SCHOOLS;
  constructor() { }
  selectedDept: Department;
  onSelect(dept: Department): void{
    this.selectedDept=dept;
  }

  ngOnInit() {
  }

}
