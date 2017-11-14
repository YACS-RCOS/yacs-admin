import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
