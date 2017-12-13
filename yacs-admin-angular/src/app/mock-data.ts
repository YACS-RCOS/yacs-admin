import { School } from './school/school';
import { Department } from './department/department';
import { Course } from './course/course';
import { Section } from './section/section';

export const SECTIONS: Section[] = [
    {id: 1, course_id: 1, name: '01', crn: 87654, instructors: ["Goldschmidt", "Krishnamoorthy"],
    seats: 10, seats_taken: 5, conflicts: [1, 2, 3], num_periods: 2},
    {id: 2, course_id: 1, name: '02', crn: 87655, instructors: ["Goldschmidt"],
    seats: 10, seats_taken: 3, conflicts: [1, 2, 3], num_periods: 2},
];

export const COURSES: Course[] = [
    {id: 1, name: 'Stars, Galaxies and the Cosmos', num: '1960', department_code: 'ASTR',
      department_id: 1, min_credits: 4, max_credits: 4,
      description: 'Check back soon', sections:[]},
    {id: 2, name: 'Special Projects in Astronomy', num: '2940', department_code: 'ASTR',
      department_id: 1, min_credits: 1, max_credits: 6,
      description:`Study and research in various fields of astronomy to demonstrate \
       interest in and ability for independent work.Prerequisites/Corequisites: Prerequisite:\
       permission of instructor.When Offered: Fall and spring terms annually.Credit Hours: 3`, sections:[]},
     {id: 3, name: 'Particle Astrophysics', num: '2961', department_code: 'ASTR',
       department_id: 1, min_credits: 4, max_credits: 4,
       description: 'Description not available...', sections:[]},
    {id: 4, name: 'Chemistry I', num: '1100', department_code: 'CHEM',
      department_id: 4, min_credits:4, max_credits:4,
      description: `Principles of chemistry, with particular focus on atomic and molecular structure \
      and bonding, periodicity, basic thermodynamic principles, introduction to acid-base \
      chemistry and elementary chemical equilibrium, and introduction to organic chemistry. \
      Students cannot get credit for both this course and CHEM 1110. \
      When Offered: Fall term annually.Credit Hours: 4`, sections:[]}
];

export const DEPTS: Department[] = [
    {id: 1, code: 'ASTR', name: 'Astronomy', school_id: 3},
    {id: 2, code: 'BCBP', name: 'Biochemistry and Biophysics', school_id: 3},
    {id: 3, code: 'BIOL', name: 'Biology', school_id: 3},
    {id: 4, code: 'CHEM', name: 'Chemistry', school_id: 3},

];

export const SCHOOLS: School[] = [
    {id: 1, name: 'School of Humanities, Arts, and Social Sciences', departments: []},
    {id: 2, name: 'School of Engineering', departments: []},
    {id: 3, name: 'School of Science', departments: DEPTS},
    {id: 4, name: 'School of Architecture',departments:[]}
];
