import { async, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { DepartmentDetailComponent } from './department-detail.component';
import {Department} from '../department';
import {FakeYacsService} from '../../services/fake-yacs.service';
import {InMemoryDataService} from '../../services/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
describe('DepartmentDetailComponent', () => {
  let component: DepartmentDetailComponent;
  let fixture: ComponentFixture<DepartmentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}), RouterTestingModule],
      declarations: [ DepartmentDetailComponent ],
      providers: [FakeYacsService, {provide: ActivatedRoute, useValue: {params: Observable.of({id: 1})}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    //console.log(component.dept);
    expect(component).toBeTruthy();
  });


/*
  it('should not render when department not passed', () => {
    expect(document.getElementById('deptDetail')).toBeNull();
  });*/
  describe('when department passed', ()=>{
    beforeEach(() => {
      component.dept=new Department(1,'CPYP','Copying and Pasting', 1);
      fixture.detectChanges();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
    });
 
    
    }); 
    it('should render',() => {
      expect(document.getElementById('deptDetail')).toBeTruthy();
    });
    
    it('should display heading', () => {
      const headingText=document.getElementById('detailHeading').textContent;
      const headingPattern=component.dept.name+' Department Details';
      expect(headingText).toMatch(headingPattern);
    });

    it('should render department code', () => {
      const codeElem=document.getElementById('codeInput');
      expect(codeElem.getAttribute('ng-reflect-model')).toMatch(component.dept.code);
    });

    it('should render department name', () =>{
      const nameElem=document.getElementById('nameInput');
      expect(nameElem.getAttribute('ng-reflect-model')).toMatch(component.dept.name);
    });
    
    it('should render school dropdown', ()=> {
      const dropdown = document.getElementById('schools-dropdown');
      expect(dropdown).toBeTruthy();
    });
    /* Ideally, we want to change the code
     * to only update the values when a form
     * is submitted, so these tests can be updated later
     * it('should update department code when triggered', () => {
      expect(1).toEqual(1);
    });

    it('should update department name when triggered', () => {
      expect(1).toEqual(1);
    });*/

    describe('when save button pressed', ()=>{
      beforeEach(async()=>{
        let saveBtn=document.getElementById('save');
        saveBtn.click();
      });

      beforeEach(()=>{
        spyOn(component, 'save');
      });

      it('should call save()', async()=>{
        tick();
        expect(component.save).toHaveBeenCalled();``
      });

    });
  });
  
});
