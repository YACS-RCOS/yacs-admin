import { async, tick, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionListComponent } from './section-list.component';
import { FakeYacsService } from '../../services/fake-yacs.service';
import { YacsService } from '../../services/yacs.service';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from '../../services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRouterModule } from '../../app-router/app-router.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Section } from '../section';

describe('SectionListComponent', () => {
  let component: SectionListComponent;
  let fixture: ComponentFixture<SectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionListComponent ],
      imports: [HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}), RouterTestingModule],
      providers: [YacsService, FakeYacsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionListComponent);
    component = fixture.componentInstance;
    spyOn(component, 'getSections');
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSections',()=>{
    expect(component.getSections).toHaveBeenCalled();
  });

  it('renders header', () => {
    var header = document.getElementsByClassName("table");
    var ths = header[0].getElementsByTagName("th");
    expect(ths[0].textContent).toContain('ID');
    expect(ths[1].textContent).toContain('CRN');
  });

  it('renders deparment', async() => {
    var tbody = document.getElementsByTagName("tbody");
    var rows = tbody[0].getElementsByTagName('tr');
    //console.log(tbody[0].getElementsByTagName('tr'));

    for (var i = 0; i<component.sections.length; i++){
      // Get table data.
      var data = rows[i].getElementsByTagName('td');

      // Make sure school properties correspond with rows of the same index.
      expect(component.sections[i].id).toMatch(data[0].innerHTML);
      expect(component.sections[i].name).toMatch(data[1].innerHTML);
    }
  });

});
