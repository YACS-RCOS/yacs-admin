import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AppRouterModule } from './app-router/app-router.module';
import { SchoolListComponent } from './school/school-list/school-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    WelcomePageComponent,
    SchoolListComponent,
    DepartmentListComponent,
  ],
  imports: [
    BrowserModule, AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
