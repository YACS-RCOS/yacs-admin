import {School} from './school/school';
import { Department } from './department/department';



export const DEPTS: Department[]=[
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
