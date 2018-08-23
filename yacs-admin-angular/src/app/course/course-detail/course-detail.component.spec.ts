import { async, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {FakeYacsService} from '../../services/fake-yacs.service';
import {InMemoryDataService} from '../../services/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {YacsService} from '../../services/yacs.service';
import {Course} from '../course';
import { CourseDetailComponent } from './course-detail.component';

describe('CourseDetailComponent', () => {
  let component: CourseDetailComponent;
  let fixture: ComponentFixture<CourseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
InMemoryDataService, {passThruUnknownUrl: true}), RouterTestingModule],
      declarations: [ CourseDetailComponent ],
      providers: [{provide: YacsService, useClass: FakeYacsService}
      , {provide: ActivatedRoute, useValue: {params: Observable.of({id: 1})}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {fixture = TestBed.createComponent(CourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
  });
   it('should create', () => {
      expect(component).toBeTruthy();
    });


  describe('when course passed', () => {
    beforeEach(() => {  component.course = new Course(1, 'Introduction to Googling', '1010', 'CPYP', 1, 4, 4, 'An introduction to using Google to help debug code', []);
      console.log(component.course);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
      });

    });


    it('should display heading', () => {
      const headingText = document.getElementById('detailHeading').textContent;
      const headingPattern = component.course.department_code + ' ' + component.course.number + ': ' + component.course.name + ' Details';
      expect(headingText).toMatch(headingPattern);
    });

    it('should render course name', () => {
      const nameElem = document.getElementById('nameInput');
      expect(nameElem.getAttribute('ng-reflect-model')).toMatch(component.course.name.substr(0, 30));
    });
    it('should render course number', () => {
      const numElem = document.getElementById('numInput');
      expect(numElem.getAttribute('ng-reflect-model')).toMatch(component.course.number);
    });
    it('should render department dropdown', () => {
      const dropdown = document.getElementById('depts-dropdown');
      expect(dropdown).toBeTruthy();
    });
    it('should render min credits', () => {
      const minCredElem = document.getElementById('minCredInput');
      expect(minCredElem.getAttribute('ng-reflect-model')).toMatch(String(component.course.min_credits));
    });
    it('should render max credits', () => {
      const maxCredElem = document.getElementById('maxCredInput');
      expect(maxCredElem.getAttribute('ng-reflect-model')).toMatch(String(component.course.max_credits));
    });

    it('should render course description', () => {
      const descElem = document.getElementById('descInput');
      // The attribute returns the first 30 characters, so be sure to reflect that
      expect(descElem.getAttribute('ng-reflect-model')).toMatch(component.course.description.substr(0, 30));
    });

    describe('when save button pressed', () => {
      beforeEach(async() => {
        const saveBtn = document.getElementById('save');
        saveBtn.click();
        spyOn(component, 'saveCourse');
      });

      it('should call saveCourse()', async() => {
        fixture.whenStable().then(() => {
          expect(component.saveCourse).toHaveBeenCalled(); ``;
        });
      });

    });


describe('when cancel button pressed', () => {
      beforeEach(async() => {
        const cancelBtn = document.getElementById('cancel');
        cancelBtn.click();
      });

      beforeEach(async() => {
        spyOn(component, 'goBack');
      });

      it('should call goBack()', async() => {
        fixture.whenStable().then(() => {
        expect(component.goBack).toHaveBeenCalled();
        });
      });

    });

  });

});
