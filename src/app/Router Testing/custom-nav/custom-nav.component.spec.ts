import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNavComponent } from './custom-nav.component';

describe('CustomNavComponent', () => {
  let component: CustomNavComponent;
  let fixture: ComponentFixture<CustomNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default page of ...', () => {

  });

  it('should have a active page swap on click', () => {

  });

  it('should check guard on swap', () => {

  });

  it('should allow access', () => {

  });

  it('should not allow access', () => {

  });
});
