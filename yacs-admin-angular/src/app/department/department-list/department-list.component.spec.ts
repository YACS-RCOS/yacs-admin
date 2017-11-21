import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { DepartmentListComponent } from './department-list.component';
import {DepartmentDetailComponent} from '../department-detail/department-detail.component';
import {FakeYacsService} from '../../fake-yacs.service';
import {HttpModule} from '@angular/http';
import {InMemoryDataService} from '../../in-memory-data.service';
import {HttpInMemoryWebApiModule} from 'angular-in-memory-web-api';

describe('DepartmentListComponent', () => {
  let component: DepartmentListComponent;
  let fixture: ComponentFixture<DepartmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule, HttpInMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true})],
      declarations: [ DepartmentListComponent, DepartmentDetailComponent ],
      providers: [FakeYacsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
  
  describe('before selecting a department', () => {
    it('should not display any departments', () => {
      expect(component.selectedDept).toBeUndefined();
    });
    it('should not display the collapse button',() => {
      expect(document.getElementById('collapse').hidden).toBe(true);
    });
  });

  describe('after selecting a department', () => {
    var expectedDept;
    beforeEach(async()=>{
      expectedDept = component.departments[1]; 
      const tbody = document.getElementsByTagName("tbody");
      const rows = tbody[0].getElementsByTagName('tr');
      const tr = rows[1];
      tr.click();
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
    })

    it('should render the department details', async() => {
      expect(component.selectedDept).toEqual(expectedDept);
    });

    /*it('should render the collapse button', () => {
      console.log(document.getElementById('collapse'));
      expect(document.getElementById('collapse').hidden).toBeFalsy();

    });*/

    describe('after pressing collapse button',() => {
      beforeEach(()=>{
        const collapseButton=document.getElementById('collapse');
        collapseButton.click();
        fixture.detectChanges();
      });
    
      it('should not display any departments', () => {
        /*Note that the department detail is now null
         * rather than undefined since it was declared
         * previously.*/
        expect(component.selectedDept).toBeNull();
      });
      
      it('should not display the collapse button',() => {
        expect(document.getElementById('collapse').hidden).toBe(true);
      });

    });

  }); 

   
});
