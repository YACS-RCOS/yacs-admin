import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AppNavComponent} from './app-nav/app-nav.component';
import {AppRouterModule} from './app-router/app-router.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {APP_BASE_HREF} from '@angular/common';
import { SchoolListComponent } from './school/school-list/school-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppNavComponent,
        WelcomePageComponent,
        SchoolListComponent,
        DepartmentListComponent
      ],
      imports: [
        AppRouterModule
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
