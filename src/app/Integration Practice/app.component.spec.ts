/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterOutlet,RouterLinkWithHref} from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  }));
/*
  A router outlet dynamically loads a component to the UI based on it's internal state. To test it:
  1) Test that router outlet is loaded
  2) Test that each link is setup properly
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

  it('should have a link to the todos page', function(){
    // This method can work on any routerLink, get a refference to the element
    let rLinks = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = rLinks.findIndex(a => a.properties['href']==='/todos')
    expect(index).toBeGreaterThan(-1);
  })

});
