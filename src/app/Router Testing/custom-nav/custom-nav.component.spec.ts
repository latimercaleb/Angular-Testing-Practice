import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomNavComponent } from './custom-nav.component';
import { Routes, Router } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { CustomHomeComponent } from './custom-home/custom-home.component';
import { CustomAboutComponent } from './custom-about/custom-about.component';
import { AboutCanActivateGuard } from '../canActivateAboutGuard.service';
import { By } from '@angular/platform-browser';
import { UserActiveService } from '../userActive.service';

fdescribe('CustomNavComponent', () => {
  const routes: Routes = [
    {path: 'first', component: CustomNavComponent},
    {path: 'home', component: CustomHomeComponent},
    {path: 'about', component: CustomAboutComponent, canActivate:[AboutCanActivateGuard]},
    {path: '**', redirectTo:"first"}
  ];

  let component: CustomNavComponent;
  let nav: Router;
  let fixture: ComponentFixture<CustomNavComponent>;
  let acGuard: AboutCanActivateGuard;
  let uaService: UserActiveService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CustomNavComponent,
        CustomAboutComponent,
        CustomHomeComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNavComponent);
    component = fixture.componentInstance;
    uaService = new UserActiveService();
    acGuard = new AboutCanActivateGuard(uaService);
    fixture.detectChanges();
  });

  // Component
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have default state of true', () => {
    let cmpState = component.renderServiceState;
    expect(cmpState).toEqual(true);
  });

  it('should change default state to false on click', () => {
    component.updateActivationState();
    expect(component.renderServiceState).toEqual(false);
  });

  //Template
  it('should have a link called first', () => {
    let linkDetected: boolean = false;
    let linkList = fixture.debugElement.nativeElement.querySelectorAll('li');
    linkList.forEach(element => {
      element.innerText === 'First' ? linkDetected = true : '';
    });
    expect(linkDetected).toBeTruthy();
  });

  it('should have a link called home', () => {
    let linkDetected: boolean = false;
    let linkList = fixture.debugElement.nativeElement.querySelectorAll('li');
    linkList.forEach(element => {
      element.innerText === 'Home' ? linkDetected = true : '';
    });
    expect(linkDetected).toBeTruthy();
  });

  it('should have a link called about', () => {
    let linkDetected: boolean = false;
    let linkList = fixture.debugElement.nativeElement.querySelectorAll('li');
    linkList.forEach(element => {
      element.innerText === 'About' ? linkDetected = true : '';
    });
    expect(linkDetected).toBeTruthy();
  });

  // Guard tests
  fit('should allow access', () => {
    let result = acGuard.canActivate();
    expect(result).toBe(true);
  });

  fit('should not allow access', () => {
    console.log(component);
    component.updateActivationState();
    fixture.detectChanges();
    console.log(component);
    let result = acGuard.canActivate();
    expect(result).toBe(true);
  });

  // Service tests 
  it ('should start as true', () => {

  });

  it ('should change state when triggered', () => {

  });

  it ('should log state to console', () => {

  });
});
