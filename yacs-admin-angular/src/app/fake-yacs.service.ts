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

}
