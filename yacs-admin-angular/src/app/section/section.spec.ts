import { Section } from './section';
import { Period } from './period';
describe('Section', () => {
  const section = new Section(1, 1, '01', 87654, ['Goldschmidt', 'Krishnamoorthy'],
  10, 5, [1, 2, 3], [new Period(800, 950, 2), new Period(800, 950, 5)], 2);

  it('has id', () => {
    expect(section.id).toBe(1);
  });

  it('has course_id', () => {
    expect(section.course_id).toBe(1);
  });

  it('has name', () => {
    expect(section.name).toBe('01');
  });

  it('has crn', () => {
    expect(section.crn).toBe(87654);
  });

  it('has instructors', () => {
    expect(section.instructors).toEqual(['Goldschmidt', 'Krishnamoorthy']);

  });

  it('has seats', () => {
    expect(section.seats).toBe(10);
  });

  it('has seats_taken', () => {
    expect(section.seats_taken).toBe(5);
  });

  it('has conflicts', () => {
    expect(section.conflicts).toEqual([1, 2, 3]);
  });

  it('has periods', () => {
    expect(section.periods[0].start).toEqual(800);
    expect(section.periods[0].end).toEqual(950);
    expect(section.periods[0].day).toEqual(2);
  });

  it('has num_periods', () => {
    expect(section.num_periods).toBe(2);
  });

});
