import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AppRouterModule } from './app-router/app-router.module';
import { SchoolListComponent } from './school/school-list/school-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { CourseListComponent } from './course/course-list/course-list.component';
@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    WelcomePageComponent,
    SchoolListComponent,
    DepartmentListComponent,
    DepartmentDetailComponent,
    CourseListComponent,
  ],
  imports: [
    BrowserModule, AppRouterModule, FormsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
