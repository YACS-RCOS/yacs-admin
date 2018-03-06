import {Injectable} from '@angular/core';
import {School} from '../school/school';
import {Department} from '../department/department';
import {Course} from '../course/course';
import {Section} from '../section/section';
import {SCHOOLS, DEPTS, COURSES, SECTIONS} from '../mock-data'
import {Observable} from 'rxjs/Observable';
import {YacsService} from './yacs.service';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import 'rxjs/add/operator/map';
const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class FakeYacsService implements YacsService{

  schoolsUrl=`api/schools`;
  deptsUrl='api/departments';
  coursesUrl='api/courses';
  sectionsUrl='api/sections';
  constructor(private http: HttpClient) {
  }

  getSchools(): Observable<School[]>{
    return this.http.get<School[]>(this.schoolsUrl);
  }

  getSchoolByName(name: string): Observable<School>{
    return this.http.get<School[]>(this.schoolsUrl)
      .map(schools=>{
        let results=schools.filter(school=> school.name == name);
        return((results.length==1) ? results[0] : null);
      });
  }

  getDepts(): Observable<Department[]>{
    return this.http.get<Department[]>(this.deptsUrl);
  }

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.coursesUrl);
    //return of(COURSES);
  }

  getSections(): Observable<Section[]>{
    return this.http.get<Section[]>(this.sectionsUrl);
    //return of(SECTIONS);
  }

  getSchoolByID(id: number): Observable<School>{
    const url=`${this.schoolsUrl}/${id}`;
    return this.http.get<School>(url);
  }

  getSectionsByCourseID(course_id: number): Observable<Section[]>{
    return this.http.get<Section[]>(this.sectionsUrl)
      .map(sections => {
        let results = sections.filter(section => section.course_id == course_id);
        return results;
      });
  }

  getDeptByID(id: number): Observable<Department>{
    const url=`${this.deptsUrl}/${id}`;
    return this.http.get<Department>(url);
  }

  getCourseByID(id: number): Observable<Course>{
    const url = `${this.coursesUrl}/${id}`;
    return this.http.get<Course>(url);
    //return of(COURSES.filter(course => course.id === id)[0]);
  }

  getSectionByID(id: number): Observable<Section>{
    const url = `${this.sectionsUrl}/${id}`;
    return this.http.get<Section>(url);
  }

  updateSchool(school: School): Observable<any>{
    return this.http.put(this.schoolsUrl, school, cudOptions).pipe(
      tap(_=>console.log(school),
      catchError(this.handleError<any>('updateSchool')))
    );
  }

  addSchool(school: School): Observable<any>{
    return this.http.post(this.schoolsUrl, school, cudOptions).pipe(
      tap(_=>console.log(school)),
      catchError(this.handleError<any>('addSchool'))
    );
  }

  deleteSchool(school: School | number): Observable<School>{
    const id=typeof school === 'number' ? school : school.id;
    const url = `${this.schoolsUrl}/${id}`;
    return this.http.delete<School>(url, cudOptions).pipe(
      tap(_ => console.log('deleted')),
      catchError(this.handleError<School>('deleteSchool'))
    );
  }

  getCoursesByDeptID(dept_id: number): Observable<Course[]>{
    return this.http.get<Course[]>(this.coursesUrl)
      .map(courses => {
        let results = courses.filter(course => course.department_id == dept_id);
        return results;
      });
    //return of(COURSES.filter(course => course.department_id === dept_id));
  }


  getDeptsBySchoolID(school_id: number): Observable<Department[]>{
  return this.http.get<Department[]>(this.deptsUrl)
      .map(depts=>{
        let results=depts.filter(dept=> dept.school_id == school_id);
        return results;
      });
  }

  updateDepartment(dept: Department): Observable<any> {
    return this.http.put(this.deptsUrl, dept, cudOptions).pipe(
      tap(_ => console.log(dept)),
      catchError(this.handleError<any>('updateDepartment'))
    );
  }

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

  updateSection(section: Section): Observable<any>{
    return this.http.put(this.sectionsUrl, section, cudOptions).pipe(
      tap(_=>console.log(section),
      catchError(this.handleError<any>('updateSchool')))
    );
  }


  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      //Borrowed error message from yacs-web
      let errorMessage: string = `YACS API Error on ${operation} - ${error}`;
      console.error(errorMessage);
      //return Observable.throw(errorMessage);
      return of(result as T);
    };
  }
}
