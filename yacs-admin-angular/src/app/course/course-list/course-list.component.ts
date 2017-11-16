import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import {SCHOOLS, DEPTS, COURSES} from '../../mock-data';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses = COURSES;
  departments = DEPTS;
  schools = SCHOOLS;
  constructor() {}
  
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
  }
}
