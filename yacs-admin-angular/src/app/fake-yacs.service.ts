import { Injectable } from '@angular/core';
import {School} from './school/school';
import { Department } from './department/department';
import { Course } from './course/course';
import {SCHOOLS, DEPTS, COURSES} from './mock-data'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FakeYacsService {

  constructor() { }

  getSchools(): Observable<School[]>{
    return of(SCHOOLS);
  }

  getDepts(): Observable<Department[]>{
    return of(DEPTS);
  }

  getCourses(): Observable<Course[]>{
    return of(COURSES);
  }

  getDeptByID(id: number): Observable<Department>{
    return of(DEPTS.filter(dept => dept.id === id)[0]);
  }
  
  getCourseByID(id: number): Observable<Course>{
    return of(COURSES.filter(course => course.id === id)[0]);
  }
  
  getSchoolByID(id: number): Observable<School>{
    return of(SCHOOLS.filter(school => school.id === id)[0]);
  }
  
  getCoursesByDeptID(dept_id: number): Observable<Course[]>{
    return of(COURSES.filter(course => course.department_id === dept_id));

  }
}
