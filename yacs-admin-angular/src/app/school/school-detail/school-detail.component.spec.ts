import { async, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {FakeYacsService} from '../../services/fake-yacs.service';
import {InMemoryDataService} from '../../services/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {School} from '../school';
import { SchoolDetailComponent } from './school-detail.component';
import {YacsService} from '../../services/yacs.service';
describe('SchoolDetailComponent', () => {
  let component: SchoolDetailComponent;
  let fixture: ComponentFixture<SchoolDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
InMemoryDataService, {passThruUnknownUrl: true}), RouterTestingModule],
      declarations: [ SchoolDetailComponent ],
      providers: [{provide: YacsService, useClass: FakeYacsService}
        , {provide: ActivatedRoute, useValue: {params: Observable.of({id: 1})}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {fixture = TestBed.createComponent(SchoolDetailComponent);
    component = fixture.componentInstance;
    component.school = new School(1, 'School of Humanities, Arts, and Social Sciences', []);
    spyOn(component, 'getSchool');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSchool', () => {
    expect(component.getSchool).toHaveBeenCalled();
  });

  it('should display heading', () => {
    const headingText = document.getElementById('detailHeading').textContent;
    const headingPattern = component.school.name + ' Details';
    expect(headingText).toMatch(headingPattern);
  });

  it('should display school name', () => {
    const nameElem = document.getElementById('nameInput');

    // Note: sometimes this is truncated to 30 characters
    expect(nameElem.getAttribute('ng-reflect-model')).toMatch(component.school.name.substring(0, 30));
  });

  describe('when save button pressed', () => {
    beforeEach(async() => {
      const saveBtn = document.getElementById('save');
      saveBtn.click();
    });

    beforeEach(() => {
      spyOn(component, 'save');
    });

    it('should call save()', async() => {
      tick();
      expect(component.save).toHaveBeenCalled();
    });

  });

  describe('when cancel button pressed', () => {
    beforeEach(async() => {
      const cancelBtn = document.getElementById('cancel');
      cancelBtn.click();
    });

    beforeEach(() => {
      spyOn(component, 'cancel');
    });

    it('should call cancel()', async() => {
      tick();
      expect(component.cancel).toHaveBeenCalled();
    });
  });

});
