import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavComponent } from './app-nav.component';

describe('AppNavComponent', () => {
  let component: AppNavComponent;
  let fixture: ComponentFixture<AppNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display YACS Admin as the page title', () =>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#page-title > a').textContent).toContain('YACS Admin');

  });
});
