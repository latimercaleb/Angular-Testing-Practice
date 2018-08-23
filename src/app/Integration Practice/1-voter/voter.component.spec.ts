import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import{ By } from '@angular/platform-browser';

fdescribe('VoterComponent', () => {
  let component :VoterComponent;
  let fixture :ComponentFixture<VoterComponent>;
  // In integration tests, Angular must make an instance of the component, most of this is done automagically from the cli
  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations:[VoterComponent]
    });
    // Wrapper around component instance, gives you access to both the class + template, does not do data-binding
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance; // Extract the base component
  });

  it('should render total votes in template', () => {
    component.othersVote = 10;
    component.myVote = 1;
    // Tells fixture explicitly to perform data-binding before assertion after other arrangements have been made
    fixture.detectChanges();
    let templateTag = fixture.debugElement.query(By.css('.vote-count'));
    expect(templateTag.nativeElement.innerText).toContain(11);
  });

  it('should highlight upvote button if previously upvoted',() => {
    component.myVote = 1;
    fixture.detectChanges();
    let templateTag = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    expect(templateTag.classes['highlighted']).toBeTruthy();
  });

  it('should increase total votes when upvote clicked',() => {
    /*
      Integration tests should not repeat unit Tests
      It is ok to test against the component here rather than the template for total votes since we already have a test that checks for that above
      All tests unit and integration can go into the same spec file, however it doesn't report well in coverage tools
      An alternative is to have all integration test in generated spec.ts and then making a .unit.spec.ts file for unit testing
    */
        let templateTag = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
        templateTag.triggerEventHandler('click',null);
        expect(component.totalVotes).toBe(1);
  })
});
