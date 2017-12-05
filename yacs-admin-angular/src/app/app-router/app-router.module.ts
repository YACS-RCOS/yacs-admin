import { NgModule } from '@angular/core';
import { Title} from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { SchoolListComponent } from '../school/school-list/school-list.component';
import { DepartmentListComponent } from '../department/department-list/department-list.component';
import { CourseListComponent } from '../course/course-list/course-list.component';
import { SectionListComponent } from '../section/section-list/section-list.component';
import {DepartmentDetailComponent} from '../department/department-detail/department-detail.component';
import {SchoolDetailComponent} from '../school/school-detail/school-detail.component';
const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
    data: {title: 'YACS Admin'}
  },
  {path: 'schools', component: SchoolListComponent},
  {path: 'schools/:id', component: SchoolDetailComponent},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'departments/:id', component: DepartmentDetailComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'sections', component: SectionListComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRouterModule { }
