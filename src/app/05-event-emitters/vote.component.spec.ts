import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('Triggers voteChanged event', () => {
        // Event emitters are observables, so subscribe
        let total = null;
        component.voteChanged.subscribe(theVoteCount => total = theVoteCount);
        component.upVote();
        expect(total).toBe(1);
  });
});
