import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavComponent } from './nav.component';
import {RouterLinkWithHref} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
fdescribe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      imports: [RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should have a link to the todos page', function(){
      // This method can work on any routerLink, get a refference to the element
      let rLinks = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
      let index = rLinks.findIndex(a => a.properties['href']==='/todos')
      expect(index).toBeGreaterThan(-1);
    })
});
