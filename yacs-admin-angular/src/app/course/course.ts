/* Department class
 * Based off of: https://github.com/YACS-RCOS/yacs-web/blob/master/src/app/course-list/course/course.ts
 */

import { Section } from '../section/section';

export class Course {
  id: number;
  name: string;
  number: string;
  department_code: string;
  department_id: number;
  min_credits:number;
  max_credits:number;
  description: string;
  sections: Section[];

  constructor(id, name, num, dep_code, dep_id, min_cred, max_cred, des, sections) {
    this.id = id;
    this.name = name;
    this.number=num;
    this.department_code = dep_code;
    this.department_id = dep_id;
    this.min_credits = min_cred;
    this.max_credits = max_cred;
    this.description = des;
  }


}
