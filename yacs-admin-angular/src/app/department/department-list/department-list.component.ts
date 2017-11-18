import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import {FakeYacsService} from '../../fake-yacs.service';
import {School} from '../../school/school';

@Component({
  selector: 'department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})



export class DepartmentListComponent implements OnInit {
  departments: Department[];
  schools: School[];
  constructor(private yacsService: FakeYacsService) { }
  selectedDept: Department;
  onSelect(dept: Department): void{
    this.selectedDept=dept;
  }

  getDepts(): void{
    this.departments=this.yacsService.getDepts();
  }
  
  getSchools(): void{
    this.schools=this.yacsService.getSchools();
  }

  ngOnInit() {
    this.getSchools();
    this.getDepts();
  }

}
