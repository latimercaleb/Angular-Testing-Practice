import { VoterComponent } from './voter.component';
import {TestBed, ComponentFixture} from '@angular/core/testing';
import{By} from '@angular/platform-browser'
fdescribe('VoterComponent', () => {
  let component :VoterComponent;
  let fixture :ComponentFixture<VoterComponent>;
  beforeEach(() => {
    // In integration tests, Angular must make an instance of the component, most of this is done automagically from the cli
    TestBed.configureTestingModule({
    declarations:[VoterComponent]
    });
    fixture = TestBed.createComponent(VoterComponent); // Wrapper around component instance, gives you access to both the class + template
    component = fixture.componentInstance; // Extract the base component
  });

  it('should render total votes in template', () => {
    component.othersVote = 10;
    component.myVote = 1;
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
});
