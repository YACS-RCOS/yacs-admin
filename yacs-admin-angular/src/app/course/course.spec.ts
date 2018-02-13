import { Department } from '../department/department';
import { School } from '../school/school';
import { Course } from './course';
describe('Course', () => {
  const course = new Course(1, 'Stars, Galaxies and the Cosmos', '1960', 'ASTR',
                            1, 4, 4, 'Check back soon', []);
  it('has id', () => {
    expect(course.name).toBe('Stars, Galaxies and the Cosmos');
  });

  it('has number', () => {
    expect(course.number).toBe('1960');
  });

  it('has department code', () => {
    expect(course.department_code).toBe('ASTR');
  });

  it('has department id', () => {
    expect(course.department_id).toBe(1);
  });

  it('has minimum credits', () => {
    expect(course.min_credits).toBe(4);
  });

  it('has maximum credits', () => {
    expect(course.max_credits).toBe(4);
  });

  it('has description', () => {
    expect(course.description).toBe('Check back soon');
  });

  // it('has sections', () => {
  //   expect(course.sections).toBe('Check back soon');
  // });

});
