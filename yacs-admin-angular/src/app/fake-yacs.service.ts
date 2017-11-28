import { Injectable } from '@angular/core';
import { School } from './school/school';
import { Department } from './department/department';
import { Course } from './course/course';
import { Section } from './section/section';
import {SCHOOLS, DEPTS, COURSES, SECTIONS} from './mock-data'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class FakeYacsService {

  schoolsUrl=`api/schools`;
  deptsUrl='api/departments';
  coursesUrl='api/courses';
  constructor(private http: HttpClient) { }

  getSchools(): Observable<School[]>{
<<<<<<< HEAD
    return this.http.get(this.schoolsUrl)
            //.do(data => console.log(data))
            .map(res=>res.json())
            .catch(this.handleError);
=======
    return this.http.get<School[]>(this.schoolsUrl);
>>>>>>> upstream/master
  }
  getDepts(): Observable<Department[]>{
    return this.http.get<Department[]>(this.deptsUrl);
  }

  getCourses(): Observable<Course[]>{
    return of(COURSES);
<<<<<<< HEAD
  }

  getSections(): Observable<Section[]>{
    console.log(SECTIONS);
    return of(SECTIONS);
=======
>>>>>>> upstream/master
  }

  getDeptByID(id: number): Observable<Department>{
    const url=`${this.deptsUrl}/${id}`;
    console.log(url);
    return this.http.get<Department>(url);
  }
<<<<<<< HEAD

=======
 
>>>>>>> upstream/master
  getCourseByID(id: number): Observable<Course>{
    return of(COURSES.filter(course => course.id === id)[0]);
  }

  getSchoolByID(id: number): Observable<School>{
    return of(SCHOOLS.filter(school => school.id === id)[0]);
  }

  getCoursesByDeptID(dept_id: number): Observable<Course[]>{
    return of(COURSES.filter(course => course.department_id === dept_id));

  }

  updateDepartment(dept: Department): Observable<any> {
    return this.http.put(this.deptsUrl, dept, cudOptions).pipe(
      tap(_ => console.log(dept)),
      catchError(this.handleError<any>('updateDepartment'))
    );  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
