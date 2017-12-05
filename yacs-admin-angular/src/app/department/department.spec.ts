import { Department } from './department';
import { School } from '../school/school';

describe('Department', () => {
  it('has name', () => {
    const dept = new Department(1,'CPYP','Copying and Pasting',1);
    expect(dept.name).toBe('Copying and Pasting');
  });

  it('has code', () => {
    const dept = new Department(1,'CPYP','Copying and Pasting',1);
    expect(dept.code).toBe('CPYP');
  });

  it('has id', () => {
    const dept = new Department(1,'CPYP','Copying and Pasting',1);
    expect(dept.id).toBe(1);
  });

  it('belongs to a school', () => {
    const dept = new Department(1,'CPYP','Copying and Pasting',1);
    const school = new School(1, 'School of StackOverflow',[dept]);
    expect(school.departments).toContain(dept);
    //expect(dept.school_id).toEqual(school.id);

  });

/*  it('can clone', () => {
    const dept = new Department(1,'CPYP','Copying and Pasting',1);
    const deptClone=dept.clone();
    expect(deptClone).toEqual(dept);
  });*/
});
