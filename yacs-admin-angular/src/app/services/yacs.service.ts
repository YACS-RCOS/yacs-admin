import {School} from '../school/school';
import {Department} from '../department/department';
import {Course} from '../course/course';
import {Section} from '../section/section';
import {Observable} from 'rxjs/Observable';

/*Abstract YacsService.
 * This can be used to implement
 * services for varying environments*/

export abstract class YacsService {

  //Return all schools
  // GET method
  abstract getSchools(): Observable<School[]>;

  /* HTTP GET method
   * Return a singular school by:
   *  Name
   *  ID */
  abstract getSchoolByName(name: String): Observable<School>;
  abstract getSchoolByID(id: number): Observable<School>;

  //PUT method for schools
  abstract updateSchool(school: School): Observable<any>;

  //POST method for schools
  abstract addSchool(school: School): Observable<any>;

  //DELETE method for schools
  abstract deleteSchool(school: School | number): Observable<School>;

  //Return all departments 
  // GET method
  abstract getDepts(): Observable<Department[]>;

  /* HTTP GET method
   * Return a singular department by ID */
  abstract getDeptByID(id: number): Observable<Department>;

  //HTTP GET method
  //Return all departments in a school
  abstract getDeptsBySchoolID(school_id: number): Observable<Department[]>;

  //PUT method for departments 
  abstract updateDepartment(dept: Department): Observable<any>;

  //POST method for departments 
  abstract addDepartment(dept: Department): Observable<any>;

  //DELETE method for departments 
  abstract deleteDepartment(dept: Department | number): Observable<Department>;
  abstract getCourseByID(id: number): Observable<Course>;

  abstract getCourses(): Observable<Course[]>;
  abstract getCoursesByDeptID(dept_id: number): Observable<Course[]>;
//PUT method for courses
  abstract updateCourse(course: Course): Observable<any>;
  abstract deleteCourse(course: Course | number): Observable<Course>;
  abstract getSections(): Observable<Section[]>;
  abstract getSectionByID(id: number): Observable<Section>;
  abstract getSectionsByCourseID(course_id: number): Observable<Section[]>;
}
