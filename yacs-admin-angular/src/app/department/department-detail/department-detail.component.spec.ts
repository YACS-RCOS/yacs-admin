import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { DepartmentDetailComponent } from './department-detail.component';
import {Department} from '../department';
describe('DepartmentDetailComponent', () => {
  let component: DepartmentDetailComponent;
  let fixture: ComponentFixture<DepartmentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ DepartmentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //console.log(component.dept);
    expect(component).toBeTruthy();
  });

  it('should not render when department not passed', () => {
    expect(document.getElementById('deptDetail')).toBeNull();
  });
  describe('when department passed', ()=>{
    beforeEach(() => {
      component.dept=new Department(1,'CPYP','Copying and Pasting', 1);
      fixture.detectChanges();
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

    /* Ideally, we want to change the code
     * to only update the values when a form
     * is submitted, so these tests can be updated later
     * it('should update department code when triggered', () => {
      expect(1).toEqual(1);
    });

    it('should update department name when triggered', () => {
      expect(1).toEqual(1);
    });*/
  });
  
});
