import { Section } from './section';
import { Department } from '../department/department'
describe('School', () => {
  it('has name', () => {
    const school = new School(1, 'School of StackOverflow',[]);
    expect(school.name).toBe('School of StackOverflow');
  });

  it('has id',() => {
    const school = new School(1, 'School of StackOverflow',[]);
    expect(school.id).toBe(1);
  });

  it('has departments', () => {
    const dept1 = new Department(1,'CPYP','Copying and Pasting',1);
    const school = new School(1, 'School of StackOverflow',[dept1]);
    expect(school.departments[0].name).toBe('Copying and Pasting');
  });

});
