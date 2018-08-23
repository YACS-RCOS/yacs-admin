/* School class
 * Based off of: https://github.com/YACS-RCOS/yacs-web/blob/master/src/app/school-list/school.ts
 */

import { Department } from '../department/department';



export class School {
  id: number;
  name: string;
  departments: Department[];

  constructor (id, name, departments) {
    this.id = id;
    this.name = name;
    this.departments = departments;
  }

}
