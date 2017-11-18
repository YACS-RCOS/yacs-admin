import { NgModule } from '@angular/core';
import { Title} from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { SchoolListComponent } from '../school/school-list/school-list.component';
import { DepartmentListComponent } from '../department/department-list/department-list.component';
import { CourseListComponent } from '../course/course-list/course-list.component'
const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
    data: {title: 'YACS Admin'}
  },
  {path: 'schools', component: SchoolListComponent},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'courses', component: CourseListComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRouterModule { }
