import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SpecialparagraphComponent } from './specialparagraph.component';

fdescribe('SpecialparagraphComponent', () => {
  let component: SpecialparagraphComponent;
  let fixture: ComponentFixture<SpecialparagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialparagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialparagraphComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // 2 ways of making a component instance
    console.log(fixture.debugElement.componentInstance);
    console.log(fixture.componentInstance);
    expect(component).toBeTruthy();
  });

  it('should render a p-tag', () => {
    const tag = fixture.debugElement.nativeElement;
    expect(tag).toBeDefined();
  });

  it('should start with class=one, in case of static class', () => {
   fixture.detectChanges();

   let tag = fixture.debugElement.query(By.css('.one')); // NOTE: If this bugs out, try running change detection first on the component, doing things like data binding in the field will make it not-renderable without pre-running change detection

   // Two ways of accessing classnames either from debug elem or native elem
   const tagClasses = tag.properties.className;
   const alsoTagClasses = tag.nativeElement.classList;
    expect(tagClasses.includes('one')).toBeTruthy();
    expect(alsoTagClasses.contains('one')).toBeTruthy();
  });

  // NEVER use _ => {...} unless you want to just pass a blank param, it will cause async issues with jasmine
  it('should have class=two on click, in the case of a static class', () => {
    const btn = fixture.debugElement.query(By.css('.btn'));
    // btn.nativeElement.click();
    btn.triggerEventHandler('click',{});

    fixture.detectChanges();

    const tag = fixture.debugElement.query(By.css('.two'));
    const result = tag.properties.className.includes('two');
    expect(result).toBeTruthy();
  });
  
  fit('should start with class=one, in case of dynamic ng class', () => {
    fixture.detectChanges();
    let tag = fixture.debugElement.query(By.css('.one'));
    // Classes added the Angular way (ngClass) go into a different property than normal
    const tagClasses = tag.classes.one;
    expect(tagClasses).toBe(true);
  });

  fit('should have class=two on click, in the case of a dynamic ng class', () => {
    const btn = fixture.debugElement.query(By.css('.btn'));
    btn.triggerEventHandler('click',{});
    fixture.detectChanges();
    const tag = fixture.debugElement.query(By.css('.two'));
    const result = tag.classes.two;
    expect (result).toBe(true);
  });

});
