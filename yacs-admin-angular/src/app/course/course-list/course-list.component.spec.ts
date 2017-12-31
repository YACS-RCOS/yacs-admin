import { async, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing' ;
import { CourseListComponent } from './course-list.component';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {FakeYacsService} from '../../services/fake-yacs.service';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from '../../services/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {YacsService} from '../../services/yacs.service';
describe('CourseListComponent', ()=>{

describe('no query parameters', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let mockParams = [{}];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(    InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true, delay: 100} )],
      declarations: [ CourseListComponent ],
      providers: [
        {provide: YacsService, useClass: FakeYacsService},
        {provide: ActivatedRoute, useValue:
          {'queryParams': Observable.from(mockParams)}
        }
      ]
    })
    .compileComponents();
  
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    
    spyOn(component, 'getAllDepts');
    
    
    fixture.detectChanges();
    

    fixture.whenStable().then(()=>{
      fixture.detectChanges();
    });
    
    spyOn(component, 'setDeptId');
  
    spyOn(component, 'getAllCourses');
  });

  it('should create', () => {
    console.log(component.courses);
    expect(component).toBeTruthy();
  });

  it('should get departments', () => {
    expect(component.getAllDepts).toHaveBeenCalled();
  });

  it('should get all courses', async()=>{
    tick();
    expect(component.getAllCourses).toHaveBeenCalled();
  });

  it('should attempt to retrieve the department id', async()=>{
    tick();
    expect(component.setDeptId).toHaveBeenCalled();
  });

  

    it('should display a header titled \'All Courses\'',() => {
      var header=document.getElementsByTagName('h2')[0];
      expect(header.textContent).toMatch('All Courses');
    });

    it('should display the table',() => {
      expect(document.getElementsByClassName('table')).toBeTruthy();
    });
});
  describe('invalid department id is passed', () => {
    
   let component: CourseListComponent;
   let fixture: ComponentFixture<CourseListComponent>;     
   let mockParams=[{'dept_id': 99999999}];
    
    beforeEach(async()=>{

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(    InMemoryDataService, {passThruUnknownUrl: true, delay: 100})],
      declarations: [ CourseListComponent ],
      providers: [
        {provide: YacsService, useClass: FakeYacsService},
        {provide: ActivatedRoute, useValue:
          {'queryParams': Observable.from(mockParams)}
        }
      ]
    })
    .compileComponents();
    });
    beforeEach(() => {
      fixture = TestBed.createComponent(CourseListComponent);
      component = fixture.componentInstance;
      
      spyOn(component, 'getAllDepts');
      
      fixture.detectChanges(); 
      fixture.whenStable().then(()=>{
        fixture.detectChanges();
      });

      spyOn(component, 'getCoursesInDept');
      spyOn(component, 'setDeptId');
    });


    it('should set error to true',()=>{
      expect(component.error).toBe(true);
    });

    it('should display an error message', async() => {
      tick();
      var errorMessage=document.getElementById('errorMsg');
      expect(errorMessage).toBeTruthy();
    });
  
    it('should get departments', () => {
      expect(component.getAllDepts).toHaveBeenCalled();
    });
    
    it('should attempt to retrieve the department id', async()=>{
      tick();
      expect(component.setDeptId).toHaveBeenCalled();
    });

    it('should attempt to get courses', async()=>{
      tick();
      expect(component.getCoursesInDept).toHaveBeenCalledWith(mockParams['dept_id']);
    });
  
  });
  
  describe('valid department id is passed', ()=>{
  describe('department has courses', () => {
   let component: CourseListComponent;
   let fixture: ComponentFixture<CourseListComponent>;     
   let mockParams=[{'dept_id': 1}];
    
    beforeEach(async()=>{

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(    InMemoryDataService, {passThruUnknownUrl: true, delay: 100})] ,
      declarations: [ CourseListComponent ],
      providers: [
         {provide: YacsService, useClass: FakeYacsService},
        {provide: ActivatedRoute, useValue:
          {'queryParams': Observable.from(mockParams)}
        }
      ]
    })
    .compileComponents();
    });
    beforeEach(() => {
      fixture = TestBed.createComponent(CourseListComponent);
      component = fixture.componentInstance;
      spyOn(component, 'getAllDepts');
      fixture.detectChanges(); 
      fixture.whenStable().then(()=>{
        fixture.detectChanges();
      });
      spyOn(component, 'getCoursesInDept');
      spyOn(component, 'setDeptId');
    });
    
    it('should render courses in the specified department', async() => {
      expect(component.selectedDept.id).toEqual(mockParams[0]['dept_id']);
    });

    it('should render correct header', async() => {
      var header=document.getElementsByTagName('h2')[0];
      var pattern = 'Courses in the '+component.selectedDept.name+' Department';
      expect(header.textContent).toMatch(pattern);
    });
    
    it('should display the table',() => {
      expect(document.getElementsByClassName('table')).toBeTruthy();
    });

    it('should get departments', () => {
      expect(component.getAllDepts).toHaveBeenCalled();
    });
    
    it('should attempt to retrieve the department id', async()=>{
      tick();
      expect(component.setDeptId).toHaveBeenCalled();
    });

    it('should attempt to get courses', async()=>{
      tick();
      expect(component.getCoursesInDept).toHaveBeenCalledWith(mockParams['dept_id']);
    });


  });

describe('no courses in department', () => {
  
   let component: CourseListComponent;
   let fixture: ComponentFixture<CourseListComponent>;     
   let mockParams=[{'dept_id': 2}];
    
    beforeEach(async()=>{

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(    InMemoryDataService, {passThruUnknownUrl: true, delay: 100})],
      declarations: [ CourseListComponent ],
      providers: [
        {provide: YacsService, useClass: FakeYacsService},

        {provide: ActivatedRoute, useValue:
          {'queryParams': Observable.from(mockParams)}
        }
      ]
    })
    .compileComponents();
    });
    beforeEach(() => {
      fixture = TestBed.createComponent(CourseListComponent);
      component = fixture.componentInstance;
      spyOn(component, 'getAllDepts');
      fixture.detectChanges(); 
      fixture.whenStable().then(()=>{
        fixture.detectChanges();
      });
      spyOn(component, 'getCoursesInDept');
      spyOn(component, 'setDeptId');
    });

    it('should render correct header', async() => {
      tick();
      var header=document.getElementsByTagName('h2')[0];
      var pattern = 'Courses in the '+component.selectedDept.name+' Department';
      expect(header.textContent).toMatch(pattern);
    });

  it('should state there are no courses in the department', () => {
    var pageText=document.getElementsByTagName('p')[0];
    console.log(pageText);
    expect(pageText.textContent).toMatch('There are currently no courses under this department');
  });

    it('should get departments', () => {
      expect(component.getAllDepts).toHaveBeenCalled();
    });
    
    it('should attempt to retrieve the department id', async()=>{
      tick();
      expect(component.setDeptId).toHaveBeenCalled();
    });

    it('should attempt to get courses', async()=>{
      tick();
      expect(component.getCoursesInDept).toHaveBeenCalledWith(mockParams['dept_id']);
    });

});
});
  // it('renders header', () => {
  //   var header = document.getElementsByClassName("table");
  //   var ths = header[0].getElementsByTagName("th");
  //   expect(ths[0].textContent).toContain('ID');
  //   expect(ths[1].textContent).toContain('Code');
  //   expect(ths[2].textContent).toContain('Name');
  // });
  //
  // it('renders course', () => {
  //   //making sure we can access component departments
  //   console.log(component.courses);
  //
  //   //write the actual tests here
  //   var tbody = document.getElementsByTagName("tbody");
  //   var rows = tbody[0].getElementsByTagName('tr');
  //   console.log(tbody[0].getElementsByTagName('tr'));
  //
  //   for (var i = 0; i<component.courses.length; i++){
  //     console.log("COURSE COMPONENT");
  //     console.log(component.courses[i]);
  //     console.log("ROW");
  //     console.log(rows[i]);
  //
  //     // Get table data.
  //     var data = rows[i].getElementsByTagName('td');
  //
  //     // Make sure department properties correspond with rows of the same index.
  //     expect(component.courses[i].id).toMatch(data[0].innerHTML);
  //     expect(component.courses[i].name).toMatch(data[1].innerHTML);
  //     expect(component.courses[i].num).toMatch(data[2].innerHTML);
  //   }
  // });
});
