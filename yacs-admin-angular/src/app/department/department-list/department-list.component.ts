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
    this.yacsService.getDepts()
      .subscribe(departments => this.departments = departments);
  }
  
  getSchools(): void{
    this.yacsService.getSchools()
      .subscribe(schools => this.schools = schools);
  }

  ngOnInit() {
    this.getSchools();
    this.getDepts();
  }

}
