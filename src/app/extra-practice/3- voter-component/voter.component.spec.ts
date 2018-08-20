/*
  Component: Simulates upvote/downvote in template uses custom event to update myVote property bindings
  Test: each function and totalVote state as well as custom event being fired or not
*/
import {VoterComponent} from'./voter.component';
fdescribe('Exercise 3: Vote component should: ',() => {
  let voteCmp :VoterComponent;
  beforeEach(() =>{
        voteCmp = new VoterComponent()
 })
 it('have an initial vote count of 0',() => {
       expect(voteCmp.myVote).toBe(0);
 })
 it('have initial other vote count of 0',() => {
       expect(voteCmp.othersVote).toBe(0);
 })
  it('should be moving up to a higher value on upvote click',() => {
    voteCmp.upVote();
    expect(voteCmp.myVote).toBe(1);
  })
  it('should not upvote again if previously upvoted',() => {
    voteCmp.myVote = 1;
    voteCmp.upVote();
    expect(voteCmp.myVote).toBe(1);
  })
  it('should move to a lower value on downvote click',() => {
    voteCmp.downVote();
    expect(voteCmp.myVote).toBe(-1);
  })
  it('should not downvote again if previously downvoted',() => {
    voteCmp.myVote = -1;
    voteCmp.downVote();
    expect(voteCmp.myVote).toBe(-1);
  })
  it('totalVotes returns sum when 0',() => {
    voteCmp.myVote = 0;
    voteCmp.othersVote = 0;
    expect(voteCmp.totalVotes).toBe(0);
  })
  it('totalVotes returns sum when positive',() => {
    voteCmp.myVote = 1;
    voteCmp.othersVote = 6;
    expect(voteCmp.totalVotes).toBe(7);
  })
  it('totalVotes returns sum when negative',() => {
    voteCmp.myVote = -1;
    voteCmp.othersVote = -10;
    expect(voteCmp.totalVotes).toBe(-11);
  })
  /*
  Custom events are used to emit change to the template, we need to test the emit() by subscribing then triggering, then examining the result with an assumption
  */
  describe('Custom event should',() => {
    it('fire on upvote',() => {
      let custObj = null;
      voteCmp.myVoteChanged.subscribe(evt => custObj = evt);
      voteCmp.upVote();
      expect(custObj).toEqual({myVote: 1});
    })
    it('fires on downvote',() => {
      let custObj = {myVote: 0};
      voteCmp.myVoteChanged.subscribe(evt => custObj = evt);
      voteCmp.downVote();
      expect(custObj).toEqual({myVote: -1});
    })
  })
});
