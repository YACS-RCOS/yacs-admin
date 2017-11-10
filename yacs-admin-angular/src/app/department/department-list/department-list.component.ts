import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
const DEPTS: Department[] = [
  {id: 1, code: 'ASTR', name: 'Astronomy', school_id: 3},
  {id: 2, code: 'BCBP', name: 'Biochemistry and Biophysics', school_id: 3},
  {id: 3, code: 'BIOL', name: 'Biology', school_id: 3},
  {id: 4, code: 'CHEM', name: 'Chemistry', school_id: 3},
];

@Component({
  selector: 'department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})



export class DepartmentListComponent implements OnInit {
  departments = DEPTS;
  constructor() { }
  selectedDept: Department;
  onSelect(dept: Department): void{
    this.selectedDept=dept;
  }

  ngOnInit() {
  }

}
