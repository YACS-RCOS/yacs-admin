import { Injectable } from '@angular/core';
import {School} from './school/school';
import { Department } from './department/department';
import { Course } from './course/course';
import {SCHOOLS, DEPTS, COURSES} from './mock-data'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';
import 'rxjs/add/operator/map';
const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class FakeYacsService {

  schoolsUrl=`api/schools`;
  deptsUrl='api/departments';
  coursesUrl='api/courses';
  constructor(private http: HttpClient) { }

  getSchools(): Observable<School[]>{
    return this.http.get<School[]>(this.schoolsUrl);
  }

  getSchoolByName(name: string): Observable<School>{
    return this.http.get<School[]>(this.schoolsUrl)
      .map(schools=>{
        let results=schools.filter(school=> school.name == name);
        return((results.length==1) ? results[0] : null);
      })
  }
  getDepts(): Observable<Department[]>{
    return this.http.get<Department[]>(this.deptsUrl);
  }

  getCourses(): Observable<Course[]>{
    return of(COURSES);
  }

  getDeptByID(id: number): Observable<Department>{
    const url=`${this.deptsUrl}/${id}`;
    console.log(url);
    return this.http.get<Department>(url);
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

  updateDepartment(dept: Department): Observable<any> {
    return this.http.put(this.deptsUrl, dept, cudOptions).pipe(
      tap(_ => console.log(dept)),
      catchError(this.handleError<any>('updateDepartment'))
    );  }

  addDepartment(dept: Department): Observable<any>{
    return this.http.post(this.deptsUrl, dept, cudOptions).pipe(
      tap(_ => console.log(dept)),
      catchError(this.handleError<any>('addDepartment'))
    );
  }

  deleteDepartment(dept: Department | number): Observable<Department>{
    const id=typeof dept === 'number' ? dept : dept.id;
    const url = `${this.deptsUrl}/${id}`;

    return this.http.delete<Department>(url, cudOptions).pipe(
      tap(_=> console.log('deleted')),
      catchError(this.handleError<Department>('deleteDepartment'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
