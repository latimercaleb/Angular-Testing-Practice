/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent {
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('highlights with custom value', function(){
        let p = fixture.debugElement.queryAll(By.css('p'))[0];
        expect(p.nativeElement.style.backgroundColor).toBe('cyan');
 })

 it('highlights with default value', function(){
       let p = fixture.debugElement.queryAll(By.css('p'))[1];
       let directive = p.injector.get(HighlightDirective);
       expect(p.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
})

  /*
    When testing a property directive there must be a host-component included in the test file to apply different ways in can be used
  */
});
