/* School class
 * Based off of: https://github.com/YACS-RCOS/yacs-web/blob/master/src/app/school-list/school.ts
 */

export class School {
  id: number;
  name: string;
  departments: string[]; //Let this be a string array for now,
                         // we can change this to a department array later

  constructor(id, name, departments){
    this.id=id;
    this.name=name;
    this.departments=departments;
  }

}

