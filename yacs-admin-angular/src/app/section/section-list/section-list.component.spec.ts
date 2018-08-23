import { async, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing' ;
import { SectionListComponent } from './section-list.component';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {FakeYacsService} from '../../services/fake-yacs.service';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from '../../services/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {YacsService} from '../../services/yacs.service';
describe('SectionListComponent', () => {


  describe('no parameters queried', () => {


    let component: SectionListComponent;
    let fixture: ComponentFixture<SectionListComponent>;
    const mockParams = [{}];
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true, delay: 100} )],
        declarations: [ SectionListComponent ],
        providers: [
          {provide: YacsService, useClass: FakeYacsService},
          {provide: ActivatedRoute, useValue: {'queryParams': Observable.from(mockParams)}}]
      })
      .compileComponents();
    }));

     beforeEach(() => {
      fixture = TestBed.createComponent(SectionListComponent);
      component = fixture.componentInstance;
      spyOn(component, 'getSections');

      spyOn(component, 'getSelectedCourse');
      spyOn(component, 'setCourseId');
      spyOn(component, 'getCourseSections');
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        fixture.detectChanges();
      });

    });



    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should call getSections', () => {
      expect(component.getSections).toHaveBeenCalled();
    });

    it('should call setCourseId', () => {
      expect(component.setCourseId).toHaveBeenCalled();
    });

    it('should not call getCourseSections', () => {
      expect(component.getCourseSections).not.toHaveBeenCalled();
    });

    it('should not call getSelectedCourse', () => {
      expect(component.getSelectedCourse).not.toHaveBeenCalled();
    });

    it('should display a header called \"All Sections\"', () => {
      const header = document.getElementsByTagName('h2')[0];
      expect(header.textContent).toMatch('All Sections');
    });

    it('should display the table', () => {
      expect(document.getElementsByClassName('table')).toBeTruthy();
    });

  });

    describe('valid course id queried', () => {


    let component: SectionListComponent;
    let fixture: ComponentFixture<SectionListComponent>;
    const mockParams = [{'course_id': 1}];
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true, delay: 100} )],
        declarations: [ SectionListComponent ],
        providers: [
          {provide: YacsService, useClass: FakeYacsService},
          {provide: ActivatedRoute, useValue: {'queryParams': Observable.from(mockParams)}}]
      })
      .compileComponents();
    }));

     beforeEach(() => {
      fixture = TestBed.createComponent(SectionListComponent);
      component = fixture.componentInstance;
      spyOn(component, 'getSections');

      spyOn(component, 'getSelectedCourse');
      spyOn(component, 'setCourseId');
      spyOn(component, 'getCourseSections');
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        fixture.detectChanges();
      });

    });



    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should call getSections', () => {
      expect(component.getSections).toHaveBeenCalled();
    });

    it('should call setCourseId', () => {
      expect(component.setCourseId).toHaveBeenCalled();
    });

    it('should  call getCourseSections', async() => {
      tick(100);
      expect(component.getCourseSections).toHaveBeenCalled();
    });

    it('should call getSelectedCourse', async() => {
      tick(100);
      expect(component.getSelectedCourse).toHaveBeenCalled();
    });

    it('should not display a header called \"All Sections\"', async() => {
      tick();
      const header = document.getElementsByTagName('h2')[0];
      expect(header.textContent).not.toMatch('All Sections');
    });

    it('should display the table', () => {
      expect(document.getElementsByClassName('table')).toBeTruthy();
    });


    describe('when showPeriods clicked', () => {
      beforeEach(async() => {
        const periodsButton = document.getElementById('showPeriods');
        periodsButton.click();
      });

      beforeEach(() => {
        spyOn(component, 'showPeriods');
      });

      it('should call showPeriods()', async() => {
        tick();
        expect(component.showPeriods).toHaveBeenCalled();
      });
    });

  });



});
