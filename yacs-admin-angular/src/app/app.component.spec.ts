import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AppNavComponent} from './app-nav/app-nav.component';
import {AppRouterModule} from './app-router/app-router.module';
import { FormsModule } from '@angular/forms';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {APP_BASE_HREF} from '@angular/common';
import { SchoolListComponent } from './school/school-list/school-list.component';
import { SchoolDetailComponent } from './school/school-detail/school-detail.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { SectionListComponent } from './section/section-list/section-list.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppNavComponent,
        WelcomePageComponent,
        SchoolListComponent,
        SchoolDetailComponent,
        DepartmentListComponent,
        DepartmentDetailComponent,
        CourseListComponent,
        SectionListComponent
      ],
      imports: [
        FormsModule, HttpClientModule,AppRouterModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true, delay: 100}), 
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/'}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'YACS Admin'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('YACS Admin');
  }));

});
