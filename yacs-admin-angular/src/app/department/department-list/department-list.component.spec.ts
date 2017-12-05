import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { DepartmentListComponent } from './department-list.component';
import {DepartmentDetailComponent} from '../department-detail/department-detail.component';
import {FakeYacsService} from '../../fake-yacs.service';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from '../../in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {RouterTestingModule} from '@angular/router/testing';
describe('DepartmentListComponent', () => {
  let component: DepartmentListComponent;
  let fixture: ComponentFixture<DepartmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}), RouterTestingModule],
      declarations: [ DepartmentListComponent, DepartmentDetailComponent ],
      providers: [FakeYacsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(DepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'getDepts');
    spyOn(component, 'getSchools');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders header', () => {
    var header = document.getElementsByClassName("table");
    var ths = header[0].getElementsByTagName("th");
    expect(ths[0].textContent).toContain('ID');
    expect(ths[1].textContent).toContain('Code');
    expect(ths[2].textContent).toContain('Name');
  });

  it('calls getDepts()', async()=>{
    tick();
    expect(component.getDepts).toHaveBeenCalled();
  });

  it('renders deparment', async() => {
    //making sure we can access component departments
    //console.log(component.departments);

    //write the actual tests here
    var tbody = document.getElementsByTagName("tbody");
    var rows = tbody[0].getElementsByTagName('tr');
    //console.log(tbody[0].getElementsByTagName('tr'));

    for (var i = 0; i<component.departments.length; i++){
      //console.log("DEPARTMENT COMPONENT");
      //console.log(component.departments[i]);
      //console.log("ROW");
      //console.log(rows[i]);

      // Get table data.
      var data = rows[i].getElementsByTagName('td');

      // Make sure department properties correspond with rows of the same index.
      expect(component.departments[i].id).toMatch(data[0].innerHTML);
      expect(component.departments[i].code).toMatch(data[1].innerHTML);
      expect(component.departments[i].name).toMatch(data[2].innerHTML);
    }
  });
  
  describe('before clicking \'New Department\'', () => {


    it('should not display the form', () => {
      expect(document.getElementById('newDept')).toBeNull();
    });

    it('should display \'New Department\'',() => {
      expect(document.getElementsByClassName('new-object-link')[0]).toBeTruthy();
    });
  });
  describe('after clicking \'New Department\'', () => {
    beforeEach(async()=>{
      const newDeptBtn=document.getElementById('newDeptBtn');
      newDeptBtn.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
      });
       
    });

    beforeEach(()=>{
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
      });
    });

    it('should set creatingDept to true', async() => {
      tick();
      expect(component.creatingDept).toEqual(true);
    });
    it('should render the form', async() => {
      tick(); 
      expect(document.getElementById('newDept')).toBeTruthy();
      //expect(component.selectedDept).toEqual(expectedDept);
    });

    describe('when \'Cancel\' is pressed', () => {
      beforeEach(async()=>{
        const cancelBtn=document.getElementById('cancelBtn');
        cancelBtn.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
        });
      });

      beforeEach(()=>{
        spyOn(component, 'cancelNewDept').and.callThrough();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
        });
      });
    
        /*This spec is pending until we can replace
         *  this dialog with a Bootstrap modal.*/

        xit('displays the dialog', async()=>{
          tick();
          expect(component.cancelNewDept).toHaveBeenCalled();
        });

});


    describe('When \'Create Department\' is pressed', () => {
      beforeEach(async()=>{
        const createBtn=document.getElementById('createBtn');
        createBtn.click();
      });

      beforeEach(()=>{
        spyOn(component,'createDept');
      });

      it('should call createDept', async()=>{
        tick();
        expect(component.createDept).toHaveBeenCalled();
      });
    });

  }); 

   
});
