import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListComponent } from './department-list.component';

describe('SchoolListComponent', () => {
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


});
