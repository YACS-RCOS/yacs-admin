import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import {FakeYacsService} from '../../fake-yacs.service';

@Component({
  selector: 'school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools: School[];
  creatingSchool: boolean;
  constructor(private yacsService: FakeYacsService) { }

  getSchools(): void{
    this.yacsService.getSchools()
      .subscribe(schools => this.schools = schools);
  }

  deleteSchool(school: School): void{
    this.yacsService.deleteSchool(school)
      .subscribe(()=>{this.getSchools()});
  }

  showSchoolForm(): void{
    this.creatingSchool=true;
  }

  cancelNewSchool(): void{
    this.creatingSchool=false;
  }

  createSchool(name): void{
    let newSchool: School;
    newSchool=new School((this.schools.length + 1), name, []);
    this.yacsService.addSchool(newSchool)
      .subscribe(()=>{
        this.getSchools();
        this.creatingSchool=false;
      });
  }

  ngOnInit() {
    this.creatingSchool=false;
    this.getSchools();
  }

}
