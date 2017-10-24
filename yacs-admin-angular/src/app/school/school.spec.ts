import { School } from './school';

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
    const school = new School(1, 'School of StackOverflow',[]);
    expect(school.departments).toBeDefined();
  });

});
