import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { DepartmentListComponent } from './department-list.component';
import {DepartmentDetailComponent} from '../department-detail/department-detail.component';
describe('DepartmentListComponent', () => {
  let component: DepartmentListComponent;
  let fixture: ComponentFixture<DepartmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ DepartmentListComponent, DepartmentDetailComponent ]
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

  it('renders deparment', () => {
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
  it('should not display any departments before clicking', () => {
    expect(component.selectedDept).toBeUndefined();
  });
  it('selects department on click', () => {
    var expectedDept = component.departments[1];
    var tbody = document.getElementsByTagName("tbody");
    var rows = tbody[0].getElementsByTagName('tr');
    var tr = rows[1];
    //Click the component
    tr.click();
    expect(component.selectedDept).toEqual(expectedDept);
  }); 
});
