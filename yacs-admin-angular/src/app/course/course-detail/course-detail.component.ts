import { Component, OnInit, Input } from '@angular/core';
import {Course} from '../course';
import {Department} from '../../department/department';
import {YacsService} from '../../services/yacs.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  @Input() course: Course;
  depts: Department[];
  constructor(private yacsService: YacsService, private route: ActivatedRoute,  private router: Router, private location: Location) { }

  ngOnInit() {
    let id: number;


     this.route.params.subscribe(params=>{id=+params['id']});
      this.yacsService.getCourseByID(id)
      .subscribe(course => this.course = course);
    //this.getCourse();
    this.getDepts();
  }

  getDepts(){
    this.yacsService.getDepts()
      .subscribe(depts => this.depts = depts);
  }

  // getCourse(){
  //   this.yacsService.getSectionByID(id)
  //     .subscribe(section=>this.section = section);
  // }

  saveCourse(){
    this.yacsService.updateCourse(this.course)
      .subscribe(()=> this.goBack());
  }
  goBack(){
    this.location.back();
  }



}
