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
  creatingDept: boolean;
  departments: Department[];
  schools: School[];
  constructor(private yacsService: FakeYacsService) { }
  /*selectedDept: Department;
  onSelect(dept: Department): void{
    let newDept = new Department(dept.id,dept.code, dept.name, dept.school_id);
    this.selectedDept=newDept;
  }*/

  getDepts(): void{
    this.yacsService.getDepts()
      .subscribe(departments => this.departments = departments);
  }
  
  getSchools(): void{
    this.yacsService.getSchools()
      .subscribe(schools => this.schools = schools);
  }

  showDeptForm(): void{
      this.creatingDept=true;
  }

  cancelNewDept(): void{
    if(confirm('Are you sure you want to cancel?')){
      this.creatingDept=false;
    }
  }

  deleteDept(dept): void{
    let promptString = 'Are you sure you want to delete the '+ dept.name + ' department?';
    if(confirm(promptString)){
      this.yacsService.deleteDepartment(dept)
        .subscribe(()=>{
          this.getDepts();
        });
    }
  }
  createDept(code, name, school_name): void{
    let newDept: Department;
    console.log(this.departments.length);
    //Get school id
    this.yacsService.getSchoolByName(school_name)
      .subscribe(school=>{
        let school_id=school.id;
        newDept = new Department((this.departments.length +1), code, name, school_id);
        this.yacsService.addDepartment(newDept)
          .subscribe( ()=>{
            //Get departments with new dept
            this.getDepts();
            this.creatingDept=false;
          }
        );
      });
    
    
  }

  ngOnInit() {
    this.creatingDept=false;
    this.getSchools();
    this.getDepts();
  }

}
