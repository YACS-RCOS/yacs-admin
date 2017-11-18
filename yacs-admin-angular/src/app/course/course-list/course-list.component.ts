import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import {Department} from '../../department/department';
import {SCHOOLS, DEPTS, COURSES} from '../../mock-data';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

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
  departments = DEPTS;
  schools = SCHOOLS;
  //ActivatedRoute is used to access parameters
  constructor(private route: ActivatedRoute) {}
  
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
    console.log(this.route.queryParams);
    this.route.queryParams
      .filter(params => params.dept_id)
      .subscribe(params =>{
        this.department_id=Number(params.dept_id);
      });

    console.log(this.department_id==null);

    //Filter the courses if department id is not null
    
    if(this.department_id){
      this.courses=COURSES.filter(course => course.department_id === this.department_id);
      this.selectedDept=DEPTS.filter(dept => dept.id === this.department_id)[0];

      //Check if this is undefined
      if(!this.selectedDept){
        this.error=true;
      }

      //Else, proceed
      else{
        //All good
        this.error=false;
      }
    
    }

    //If null, select all courses
    else{
      this.courses=COURSES;
    }
  }
}
