import { async, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {FakeYacsService} from '../../services/fake-yacs.service';
import {InMemoryDataService} from '../../services/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Section} from '../section';
import {SectionDetailComponent} from './section-detail.component';
import {YacsService} from '../../services/yacs.service';
describe('SchoolDetailComponent', () => {
  let component: SectionDetailComponent;
  let fixture: ComponentFixture<SectionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}), RouterTestingModule],
      declarations: [ SectionDetailComponent ],
      providers: [{provide: YacsService, useClass: FakeYacsService}
        , {provide: ActivatedRoute, useValue: {params: Observable.of({id: 1})}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDetailComponent);
    component = fixture.componentInstance;
    component.section=new Section(1, 1, '01', 87654, ['Goldschmidt', 'Krishnamoorthy'],
    10, 5, [1, 2, 3], 2);
    spyOn(component, 'getSection');
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSchool', ()=>{
    expect(component.getSection).toHaveBeenCalled();
  });

  it('should display heading', ()=>{
    const headingText=document.getElementById('detailHeading').textContent;
    const headingPattern=component.section.name+' Details';
    expect(headingText).toMatch(headingPattern);
  });

  it('should display school name', ()=>{
    const nameElem=document.getElementById('nameInput');

    //Note: sometimes this is truncated to 30 characters
    expect(nameElem.getAttribute('ng-reflect-model')).toMatch(component.section.name.substring(0,30));
  });

  describe('when save button pressed',()=>{
    beforeEach(async()=>{
      let saveBtn=document.getElementById('save');
      saveBtn.click();
    });

    // beforeEach(()=>{
    //   spyOn(component, 'save');
    // });
    //
    // it('should call save()', async()=>{
    //   tick();
    //   expect(component.save).toHaveBeenCalled();
    // });

  });

  describe('when cancel button pressed', ()=>{
    beforeEach(async()=>{
      let cancelBtn=document.getElementById('cancel');
      cancelBtn.click();
    });

    beforeEach(()=>{
      spyOn(component, 'cancel');
    });

    it('should call cancel()', async()=>{
      tick();
      expect(component.cancel).toHaveBeenCalled();
    });
  });

});
