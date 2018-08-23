import { Component, Input, OnInit } from '@angular/core';
import { YacsService } from '../../services/yacs.service';
import { Course } from '../../course/course';
import { Section } from '../section';
import { Period } from '../period';
import { ActivatedRoute } from '@angular/router';
const SHORT_DAYS: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

@Component({
  selector: 'section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit{
  sections: Section[];
  test_periods: Period[];
  selectedSection: Section;
  selectedCourse: Course;
  course_id: number;
  constructor(private route: ActivatedRoute, private yacsService: YacsService) { }

  ngOnInit() {
    this.setCourseId();
    //this.getSelectedCourse(0);
    //this.getCourseSections(0);
    if (this.course_id){
      this.getSelectedCourse(this.course_id);
      this.getCourseSections(this.course_id);
    }
    else{
      this.getSections();
    }
    this.test_periods = [
      {start: 800, end: 950, day: 2},
      {start: 800, end: 950, day: 5},
    ];
  }

  setCourseId(): void{
    this.route.queryParams
      .filter(params => params.course_id)
      .subscribe(params => {
        this.course_id = Number(params.course_id);
      });
  }

  getSections(): void{
    this.yacsService.getSections()
      .subscribe(sections => this.sections = sections);
  }

  getCourseSections(course_id: number): void{
    this.yacsService.getSectionsByCourseID(course_id)
      .subscribe(sections => {
        if (sections){
          this.sections = sections;
        }
      });
  }

  getSelectedCourse(course_id: number): void{
    this.yacsService.getCourseByID(course_id)
      .subscribe(course => {
        if (course){
          this.selectedCourse = course;
        }
      });
  }

  deleteSection(section): void{
      this.yacsService.deleteSection(section)
        .subscribe(() => {
        if (this.course_id){
        this.yacsService.getSectionsByCourseID(this.course_id);
    }

    //If null, select all courses
    else{
      this.getSections();
      // console.log(this.courses);
    }
        });

  }

  showPeriods(section): void{
    this.selectedSection = section;
    console.log(section.periods);
  }


  public getDay(period: Period): string {
    return SHORT_DAYS[period.day];
  }

  /**
   * Convert minutes-since-start-of-week number to an ordinary time.
   * 600 = 10a
   * 610 = 10:10a
   * 720 = 12p
   * etc
   * This should possibly be a service.
   */
  private timeToString(time: number): string {
    let hour = Math.floor(time / 100);
    const minute = Math.floor(time % 100);

    let ampm = 'a';
    if (hour >= 12) {
      ampm = 'p';
      if (hour > 12) {
        hour -= 12;
      }
    }

    let minuteShow = '';
    if (minute != 0) {
      minuteShow = ':' + (minute < 10 ? '0' : '') + minute;
    }

    return hour + minuteShow + ampm;
  }

  public getHours(period: Period): string {
    return this.timeToString(period.start) + '-' + this.timeToString(period.end);
  }
}
