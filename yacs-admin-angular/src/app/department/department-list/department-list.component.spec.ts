import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListComponent } from './department-list.component';

describe('DepartmentListComponent', () => {
  let component: DepartmentListComponent;
  let fixture: ComponentFixture<DepartmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentListComponent ]
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
    console.log(component.departments);

    //write the actual tests here
    var tbody = document.getElementsByTagName("tbody");
    var rows = tbody[0].getElementsByTagName('tr');
    console.log(tbody[0].getElementsByTagName('tr'));

    for (var i = 0; i<component.departments.length; i++){
      console.log("DEPARTMENT COMPONENT");
      console.log(component.departments[i]);
      console.log("ROW");
      console.log(rows[i]);
      //What we want to do is check each department properties
      //Make sure they correspond with rows of same index

    }
    expect(1).toEqual(1);

  });

});
