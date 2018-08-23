import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import {YacsService} from '../../services/yacs.service';
import {School} from '../../school/school';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})



export class DepartmentListComponent implements OnInit {
  creatingDept: boolean;
  departments: Department[];
  schools: School[];
  school_id: number;
  selectedSchool: School;
  error: boolean;
  constructor(private route: ActivatedRoute, private yacsService: YacsService) { }
  /*selectedDept: Department;
  onSelect(dept: Department): void{
    let newDept = new Department(dept.id,dept.code, dept.name, dept.school_id);
    this.selectedDept=newDept;
  }*/

  getDepts(): void{
    this.yacsService.getDepts()
      .subscribe(departments => this.departments = departments);
  }

  getDeptsById(id: number): void{
    this.yacsService.getDeptsBySchoolID(id)
      .subscribe(departments => this.departments = departments);
  }

  getSchools(): void{
    this.yacsService.getSchools()
      .subscribe(schools => this.schools = schools);
  }

  showDeptForm(): void{
      this.creatingDept = true;
  }

  cancelNewDept(): void{
    if (confirm('Are you sure you want to cancel?')){
      this.creatingDept = false;
    }
  }

  deleteDept(dept): void{
    const promptString = 'Are you sure you want to delete the ' + dept.name + ' department?';
    if (confirm(promptString)){
      this.yacsService.deleteDepartment(dept)
        .subscribe(() => {
            if (this.school_id){
              this.getDeptsById(this.school_id);
            }
            else{
              this.getDepts();
            }
        });
    }
  }
  createDept(code, name, school_name): void{
    let newDept: Department;
    console.log(this.departments.length);
    //Get school id
    this.yacsService.getSchoolByName(school_name)
      .subscribe(school => {
        const school_id = school.id;
        newDept = new Department((this.departments.length + 1), code, name, school_id);
        this.yacsService.addDepartment(newDept)
          .subscribe( () => {
            //Get departments with new dept
            if (this.school_id){
              this.getDeptsById(this.school_id);
            }
            else{
              this.getDepts();
            }
            this.creatingDept = false;
          }
        );
      });


  }
  setSchoolId(): void{
    this.route.queryParams
      .filter(params => params.school_id)
      .subscribe(params => {
        this.school_id = Number(params.school_id);
        this.yacsService.getSchoolByID(this.school_id)
        .subscribe( school => {
          if (!school){
            this.error = true;
          }
          else{
            this.selectedSchool = school;
            console.log(this.selectedSchool);
          }
        }, error => {this.error = true; } );
      });
  }
  ngOnInit() {
    this.creatingDept = false;
    this.error = false;

    this.setSchoolId();
    this.getSchools();
    if (this.school_id){
      this.getDeptsById(this.school_id);
    }
    else{
      this.getDepts();
    }
  }

}
