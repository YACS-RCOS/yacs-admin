import { Injectable } from '@angular/core';
import {School} from './school/school';
import { Department } from './department/department';
import { Course } from './course/course';
import {SCHOOLS, DEPTS, COURSES} from './mock-data'
@Injectable()
export class FakeYacsService {

  constructor() { }

  getSchools(): School[]{
    return SCHOOLS;
  }

  getDepts(): Department[]{
    return DEPTS;
  }

  getCourses(): Course[]{
    return COURSES;
  }

  getDeptByID(id: number): Department{
    return DEPTS.filter(dept => dept.id === id)[0];
  }
  
  getCourseByID(id: number): Course{
    return COURSES.filter(course => course.id === id)[0];
  }
  
  getSchoolByID(id: number): School{
    return SCHOOLS.filter(school => school.id === id)[0];
  }
  
  getCoursesByDeptID(dept_id: number): Course[]{
    return COURSES.filter(course => course.department_id === dept_id);

  }
}
