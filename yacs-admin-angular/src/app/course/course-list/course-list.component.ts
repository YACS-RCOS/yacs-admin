import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import {Department} from '../../department/department';
import {School} from '../../school/school';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import {FakeYacsService} from '../../fake-yacs.service';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  department_id: number;
  error: boolean;
  courses: Course[];
  selectedDept: Department;
  departments: Department[];
  schools: School[];
  //ActivatedRoute is used to access parameters
  constructor(private route: ActivatedRoute, private yacsService: FakeYacsService) {}
  
  /*Modified from yacs-web, "credit(s)" will 
   * not display because credits is column title*/
  public creditRange(course: Course): string{
    if(course.min_credits!=course.max_credits){
      return String(course.min_credits)+'-'+String(course.max_credits);
    }
    return String(course.min_credits);
  }
  selectedCourse: Course;
  onSelect(course: Course): void{
    this.selectedCourse=course;
  }

  ngOnInit() {
    this.yacsService.getDepts()
      .subscribe(departments => this.departments = departments, error=>console.log(error));
    this.yacsService.getSchools()
      .subscribe(schools => this.schools = schools);
    console.log(this.route.queryParams);
    this.route.queryParams
      .filter(params => params.dept_id)
      .subscribe(params =>{
        this.department_id=Number(params.dept_id);
      });

    console.log(this.department_id==null);

    //Filter the courses if department id is not null
    
    if(this.department_id){
      this.yacsService.getCoursesByDeptID(this.department_id)
        .subscribe(courses => this.courses = courses, error=>(console.error(error)));
      this.yacsService.getDeptByID(this.department_id)
        .subscribe(selectedDept => { 
          
          if(!selectedDept){
            this.error=true;
          }
          else{
            this.error=false;
            this.selectedDept=selectedDept;
          }
          
        }, error=>{
          this.error=true;
          this.selectedDept=null;
        });

      //Do some waiting here

      //Check if this is undefined
    }

    //If null, select all courses
    else{
      this.yacsService.getCourses()
        .subscribe(courses => this.courses = courses);
    }
  }
}
