import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import {Department} from '../../department/department';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import {YacsService} from '../../services/yacs.service';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  department_id: number;
  error: boolean;
  courses: Course[];
  selectedDept: Department;
  departments: Department[];
  //ActivatedRoute is used to access parameters
  constructor(private route: ActivatedRoute, private yacsService: YacsService) {}
  
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

  getAllDepts(): void{
    this.yacsService.getDepts()
      .subscribe(departments => this.departments = departments, error=>console.log(error));
 

  }

  setDeptId(): void{
    this.route.queryParams
      .filter(params => params.dept_id)
      .subscribe(params =>{
        this.department_id=Number(params.dept_id);
      });
  }

  getAllCourses(): void{
    this.yacsService.getCourses()
        .subscribe(courses => this.courses = courses, error=>{this.error=true; console.log(error);});
  }

  getCoursesInDept(department_id: number): void{
     this.yacsService.getCoursesByDeptID(department_id)
        .subscribe(courses => this.courses = courses, error=>(console.error(error)));
      this.yacsService.getDeptByID(department_id)
        .subscribe(selectedDept => { 
          
          if(!selectedDept){
            this.error=true;
          }
          else{
            this.error=false;
            this.selectedDept=selectedDept;
          }
          
        }, error=>{
          this.error=true;
          this.selectedDept=null;
        });


  }

  ngOnInit() {

    this.getAllDepts();
    //Filter the courses if department id is not null
    this.setDeptId(); 
    if(this.department_id){
        this.getCoursesInDept(this.department_id);
    }

    //If null, select all courses
    else{
      this.getAllCourses();   
      //console.log(this.courses);
    }
  }
}
