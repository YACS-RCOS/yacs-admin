import {Injectable} from '@angular/core';
import {School} from '../school/school';
import {Department} from '../department/department';
import { Course } from '../course/course';
import {Section} from '../section/section';
import { Observable } from 'rxjs/Observable';
import {YacsService} from './yacs.service';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';
import 'rxjs/add/operator/map';
const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class YacsProdService implements YacsService{
  baseUrl='https://yacs.cs.rpi.edu/api/v5';
  constructor(private http: HttpClient) {}
  
  getSchools(): Observable<School[]>{
    return this.http.get<School[]>(this.baseUrl+'/schools')
    .map(data => {
      console.log(data['schools']);
      return data['schools'] as School[];
    });
  }
  
  //Use params in prod implementation
  getSchoolByName(name: string): Observable<School>{
    return this.http.get<School[]>(this.baseUrl+'/schools', {
      params: new HttpParams().set('name', name)
    })
    .map(schools=>{
      //Get only the first result
      let results = schools['schools'].filter(school => school.name == name);
      return((results.length==1) ? results[0] : null);
    });
  }

  getSchoolByID(id: number): Observable<School>{
    return this.http.get<School[]>(this.baseUrl+'/schools', {
      params: new HttpParams().set('id', String(id))
    })
    .map(schools=>{
      //Get only the first result
      let results = schools['schools'].filter(school => school.id == id);
      return((results.length==1) ? results[0] : null);
    });
  }

  updateSchool(school: School): Observable<any>{
    //TODO: implement admin token
    return this.http.put(this.baseUrl+'/schools', school, cudOptions).pipe(
      //TODO: send to an actual logging system instead of console.log
      tap(_=>console.log(school)),
      catchError(this.handleError<any>('updateSchool'))
    );
  }

  addSchool(school: School): Observable<any>{
    return this.http.post(this.baseUrl+'/schools', school, cudOptions).pipe(
      tap(_=> console.log(school)),
      catchError(this.handleError<any>('addSchool'))
    );
  }

  deleteSchool(school: School | number): Observable<School>{
    const id=typeof school === 'number' ? school : school.id;
    const url = `${this.baseUrl}/schools/${id}`;
    return this.http.delete<School>(url, cudOptions).pipe(
      tap(_=> console.log('deleted school')),
      catchError(this.handleError<School>('deleteSchool'))
    );
  }

  getDepts(): Observable<Department[]>{
    return this.http.get<Department[]>(this.baseUrl+'/departments')
    .map(data=>{
      return data['departments'] as Department[];
    });
  }

  getDeptByID(id: number): Observable<Department>{
    return this.http.get<Department[]>(this.baseUrl+'/departments', {
      params: new HttpParams().set('id', String(id))
    })
    .map(depts=>{
      let results = depts['departments'].filter(dept => dept.id == id);
      return((results.length==1) ? results[0] : null);
    });
  }
 
  getDeptsBySchoolID(school_id: number): Observable<Department[]>{
    return this.http.get<Department[]>(this.baseUrl+'/departments', {
      params: new HttpParams().set('school_id', String(school_id))
    })
    .map(data=>{return data['departments'] as Department[]});
  }

  updateDepartment(dept: Department): Observable<any>{
    return this.http.put(this.baseUrl+'/departments', dept, cudOptions).pipe(
      tap(_=> console.log(dept)),
      catchError(this.handleError<any>('updateDepartment'))
    );
  }

  addDepartment(dept: Department): Observable<any>{
    return this.http.post(this.baseUrl+'/departments', dept, cudOptions).pipe(
      tap(_=> console.log(dept)),
      catchError(this.handleError<any>('addDepartment'))
    );
  }

  deleteDepartment(dept: Department | number): Observable<Department>{
    const id = typeof dept === 'number' ? dept: dept.id;
    const url = `${this.baseUrl}/departments/${id}`;
    return this.http.delete<Department>(url, cudOptions).pipe(
      tap(_=> console.log('deleted department')),
      catchError(this.handleError<Department>('deleteDepartment'))
    );
  }

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl+'/courses')
    .map(data=>{return data['courses'] as Course[]});
  }

  getCourseByID(id: number): Observable<Course>{
    return this.http.get<Course[]>(this.baseUrl+'/courses', {
      params: new HttpParams().set('id', String(id))
    })
    .map(courses=>{
      let results=courses['courses'].filter(course => course.id == id);
      return((results.length==1)? results[0]: null);
    });

  }
  updateCourse(course: Course): Observable<any>{
    return this.http.put(this.baseUrl+'/courses', course, cudOptions).pipe(
      tap(_=> console.log(course)),
      catchError(this.handleError<any>('updateCourse'))
    );
  }
  getCoursesByDeptID(dept_id: number): Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl+'/courses', {
      params: new HttpParams().set('department_id', String(dept_id))
    })
    .map(courses=>{
      return courses['courses'] as Course[]
    });
  }

  getSections(): Observable<Section[]>{
    return this.http.get<Section[]>(this.baseUrl+'/sections')
    .map(data=>{return data['sections'] as Section[]});
  }

  getSectionByID(id: number): Observable<Section>{
   return this.http.get<Section[]>(this.baseUrl+'/sections', {
      params: new HttpParams().set('id', String(id))
    })
    .map(sections=>{
      let results=sections['sections'].filter(section => section.id == id);
      return((results.length==1)? results[0]: null);
    });

  }
  getSectionsByCourseID(course_id: number): Observable<Section[]>{
   return this.http.get<Section[]>(this.baseUrl+'/sections', {
      params: new HttpParams().set('course_id', String(course_id))
    })
    .map(sections=>{
      return sections['sections'] as Section[]
    });

  }
  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      let errorMessage: string = `YACS API Error on ${operation} - ${error}`;
      //TODO: send to remote logging system instead of console
      console.error(errorMessage);
      return Observable.throw(errorMessage);
    };
  }
}
