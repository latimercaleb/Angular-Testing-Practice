// Now that we are dealing with states, in classes, we need to have a set up method to handle reinstantiation
// When using global methods you still need declaration in the global scope
// 2 methods for 2 functions
import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
 let Votes :VoteComponent;
 beforeEach(()=>{
       Votes = new VoteComponent();
 })
  it('Upvotes', () => {
        Votes.upVote();
        expect(Votes.totalVotes).toBe(1);
  });

  it('Downvotes', () => {
        Votes.downVote();
        expect(Votes.totalVotes).toBe(-1);
  });
});
