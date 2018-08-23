/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UserDetailsComponent } from './user-details.component';
import {Router,ActivatedRoute} from '@angular/router';
import {Observable,empty, Subject} from 'rxjs';
class RouterStub {
  // Base the stub on what is used in the component, we have a navigate method, provide this in router as a stub
  navigate(args){

  }
}

class ActivatedRouteStub {
  private subject = new Subject(); // Similar to Observables but allows adding new values
  push(val){
    this.subject.next(val);
  }
//  params: Observable<any> = empty();
  get params(){
    return this.subject.asObservable();
  }

}

fdescribe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect to the users page on save click', () => {
    let router = TestBed.get(Router);
    let navSpy = spyOn(router,'navigate');
    component.save();
    expect(navSpy).toHaveBeenCalledWith(['users']); // checks the stub to see if component calls method with proper parameter on interaction, now to test the route itself app.routes.unit.spec.ts
  });

  it('should redirect to the not found page on bad id', () => {
    let router = TestBed.get(Router);
    let navSpy = spyOn(router,'navigate');
    let route :ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({id:0});

    expect(navSpy).toHaveBeenCalledWith(['not-found']); // checks the stub to see if component calls method with proper parameter on interaction, now to test the route itself app.routes.unit.spec.ts
  });

  /*
    Two ways to test a router
    1) Interaction test: Test the navigate() is called with the right parameters, similar to testing a service does not guarantee navigation will work successfully, need to write another test to make sure route is legit
    2) Use a real router and make an assertion via the link in browser, tests against the framework itself and is a bit more difficult to write

    To use either method  a router will need to be faked as a stub or pulled in from the framework
    Can comment out either the route or the component function to break test, this is useful for ensuring test is testing the right thing
  */
});
