import { async, tick, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolListComponent } from './school-list.component';
import {FakeYacsService} from '../../services/fake-yacs.service';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from '../../services/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppRouterModule} from '../../app-router/app-router.module';
import {RouterTestingModule} from '@angular/router/testing';
import {School} from '../school';
import {YacsService} from '../../services/yacs.service';
describe('SchoolListComponent', () => {
  let component: SchoolListComponent;
  let fixture: ComponentFixture<SchoolListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolListComponent ],
      imports: [HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, {passThruUnknownUrl: true}), RouterTestingModule],
      providers: [{provide: YacsService, useClass: FakeYacsService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {fixture = TestBed.createComponent(SchoolListComponent);
    component = fixture.componentInstance;
    spyOn(component, 'getSchools');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSchools', () => {
    expect(component.getSchools).toHaveBeenCalled();
  });

  it('renders header', () => {
    const header = document.getElementsByClassName('table');
    const ths = header[0].getElementsByTagName('th');
    expect(ths[0].textContent).toContain('ID');
    expect(ths[1].textContent).toContain('Name');
  });



  it('renders deparment', async() => {
    const tbody = document.getElementsByTagName('tbody');
    const rows = tbody[0].getElementsByTagName('tr');
    // console.log(tbody[0].getElementsByTagName('tr'));

    for (let i = 0; i < component.schools.length; i++) {
      // Get table data.
      const data = rows[i].getElementsByTagName('td');

      // Make sure school properties correspond with rows of the same index.
      expect(component.schools[i].id).toMatch(data[0].innerHTML);
      expect(component.schools[i].name).toMatch(data[1].innerHTML);
    }
  });

  describe('before \'New School\' is pressed', () => {
    it('should not display a form', () => {
      expect(document.getElementById('newSchool')).toBeNull();
    });
    it('should display a link to \'New School\'', () => {
      expect(document.getElementsByClassName('new-object-link')[0]).toBeTruthy();
    });

  });
  describe('when \'New School\' is pressed', () => {
    beforeEach(async() => {
      const newSchoolBtn = document.getElementById('newSchoolBtn');
      newSchoolBtn.click();
    });

    beforeEach(() => {
      spyOn(component, 'showSchoolForm');
    });

    it('should call showSchoolForm()', async() => {
      tick();
      expect(component.showSchoolForm).toHaveBeenCalled();
    });

    it('should show form', async() => {
      tick();
      expect(document.getElementById('newSchool')).toBeTruthy();
    });

    describe('when \'Create School\' is pressed', () => {
      beforeEach(async() => {
        const createBtn = document.getElementById('createBtn');
        createBtn.click();
      });

      beforeEach(() => {
          spyOn(component, 'createSchool');
      });

      it('should call createSchool', async() => {
        tick();
        expect(component.createSchool).toHaveBeenCalled();
      });

      it('should not display a form', async() => {
        tick();
        expect(document.getElementById('newSchool')).toBeNull();
      });

      it('should display a link to \'New School\'', async() => {
        tick();
        expect(document.getElementsByClassName('new-object-link')[0]).toBeTruthy();
      });

    });

    describe('when \'Cancel\' is pressed', () => {
      beforeEach(async() => {
        const cancelBtn = document.getElementById('cancelBtn');
        cancelBtn.click();
      });
      beforeEach(() => {
          spyOn(component, 'cancelNewSchool');
      });

      it('should call cancelNewSchool()', async() => {
        tick();
        expect(component.cancelNewSchool).toHaveBeenCalled();
      });

      it('should not display a form', async() => {
        tick();
        expect(document.getElementById('newSchool')).toBeNull();
      });

      it('should display a link to \'New School\'', async() => {
        tick();
        expect(document.getElementsByClassName('new-object-link')[0]).toBeTruthy();
      });
    });

  });

  describe('when \'Delete\' is pressed', () => {
    let schoolToDelete: School;
    beforeEach(async() => {
      schoolToDelete = component.schools[0];
      const deleteLink = document.getElementsByClassName('delete')[0] as HTMLElement;
      deleteLink.click();
      // Store school before deleting
    });

    beforeEach(() => {
      spyOn(component, 'deleteSchool');
    });

    it('should call deleteSchool() with the right school', async() => {
      tick();
      expect(component.deleteSchool).toHaveBeenCalledWith(schoolToDelete);
    });
  });

});
