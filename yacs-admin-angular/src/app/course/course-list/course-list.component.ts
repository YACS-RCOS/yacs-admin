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
  constructor() { }
  selectedCourse: Course;
  onSelect(course: Course): void{
    this.selectedCourse=course;
  }

  ngOnInit() {
  }
}
