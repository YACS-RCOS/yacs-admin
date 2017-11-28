/* Department class
 * Based off of: https://github.com/YACS-RCOS/yacs-web/blob/master/src/app/department-list/department/department.ts
 */

export class Department {
  id: number;
  code: string;
  name: string;
  school_id: number;

  constructor(id, code, name, school_id){
    this.id=id;
    this.name=name;
    this.code=code;
    this.school_id=school_id;
  }


}
