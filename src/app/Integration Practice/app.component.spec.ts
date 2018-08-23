/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterOutlet,RouterLinkWithHref} from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,NavComponent ],
      imports: [RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  }));
/*
  A router outlet dynamically loads a component to the UI based on it's internal state. To test it:
  1) Test that router outlet is loaded
  2) Test that each link is setup properly

  Exporting the nav for the router into it's own component creates a need for a shallow component test:
  1) Need to import component
  2) Need to move tests to spec-test for the new component
  Doing this will require dependencies to be moved into the new module
*/
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a router-outlet', function(){
    // Grab referrence then assert that it isn't null
    let routlet = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(routlet).not.toBe(null);
  })


});
