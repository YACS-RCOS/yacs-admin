/* Section class
 * Based off of: https://github.com/YACS-RCOS/yacs-web/blob/master/src/app/course-list/section/section.ts
 */

import { Period } from './period';

export class Section {
  id: number;
  course_id: number;
  name: string;
  crn: number;
  instructors: string[];
  seats: number;
  seats_taken: number;
  conflicts: number[];
  //periods: Period[];
  num_periods: number;

  constructor(id, course_id, name, crn, instructors, seats, seats_taken, conflicts, periods,
     num_periods, course_name, course_number, dep_code) {
    this.id = id;
    this.course_id = course_id;
    this.name = name;
    this.instructors = instructors;
    this.seats = seats;
    this.seats_taken = seats_taken;
    this.conflicts = conflicts;
    //this.periods = periods;
    this.num_periods = num_periods;
  }
}
