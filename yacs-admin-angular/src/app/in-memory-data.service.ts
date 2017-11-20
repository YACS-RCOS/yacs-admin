import { InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const courses = [
      {id: 1, name: 'Stars, Galaxies and the Cosmos', num: '1960', department_code: 'ASTR', 
        department_id: 1, min_credits: 4, max_credits: 4,
        description: 'Check back soon'},
      {id: 2, name: 'Special Projects in Astronomy', num: '2940', department_code: 'ASTR',
        department_id: 1, min_credits: 1, max_credits: 6,
        description:`Study and research in various fields of astronomy to demonstrate \
        interest in and ability for independent work.Prerequisites/Corequisites: Prerequisite:\
        permission of instructor.When Offered: Fall and spring terms annually.Credit Hours: 3`},
      {id: 3, name: 'Particle Astrophysics', num: '2961', department_code: 'ASTR',
        department_id: 1, min_credits: 4, max_credits: 4,
        description: 'Description not available...'},
      {id: 4, name: 'Chemistry I', num: '1100', department_code: 'CHEM',
        department_id: 4, min_credits:4, max_credits:4,
        description: `Principles of chemistry, with particular focus on atomic and molecular structure \
          and bonding, periodicity, basic thermodynamic principles, introduction to acid-base \
          chemistry and elementary chemical equilibrium, and introduction to organic chemistry. \
          Students cannot get credit for both this course and CHEM 1110. \
          When Offered: Fall term annually.Credit Hours: 4`}
    ];
    const departments=[
      {id: 1, code: 'ASTR', name: 'Astronomy', school_id: 3},
      {id: 2, code: 'BCBP', name: 'Biochemistry and Biophysics', school_id: 3},
      {id: 3, code: 'BIOL', name: 'Biology', school_id: 3},
      {id: 4, code: 'CHEM', name: 'Chemistry', school_id: 3},
    ];
    const schools = [
      {id: 1, name: 'School of Humanities, Arts, and Social Sciences', departments: []},
      {id: 2, name: 'School of Engineering', departments: []},
      {id: 3, name: 'School of Science', departments: departments},
      {id: 4, name: 'School of Architecture',departments:[]}
    ];
    
    return {courses, departments, schools};
  }
}
