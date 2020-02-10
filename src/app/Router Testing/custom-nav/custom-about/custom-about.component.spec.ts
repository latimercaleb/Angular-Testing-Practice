import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAboutComponent } from './custom-about.component';

describe('CustomAboutComponent', () => {
  let component: CustomAboutComponent;
  let fixture: ComponentFixture<CustomAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
