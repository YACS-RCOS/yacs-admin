import { Section } from './section';
import { Period } from './period';
describe('Section', () => {
  it('has name', () => {
    const section = new Section(1, 1, '01', 87654, ['Goldschmidt', 'Krishnamoorthy'],
    10, 5, [1, 2, 3], 2);
    expect(section.name).toBe('01');
  });

  it('has id',() => {
    const section = new Section(1, 1, '01', 87654, ['Goldschmidt', 'Krishnamoorthy'],
    10, 5, [1, 2, 3], 2);
    expect(section.id).toBe(1);
  });

  // it('has periods', () => {
  //   const dept1 = new Department(1,'CPYP','Copying and Pasting',1);
  //   const school = new School(1, 'School of StackOverflow',[dept1]);
  //   expect(school.departments[0].name).toBe('Copying and Pasting');
  // });

});
