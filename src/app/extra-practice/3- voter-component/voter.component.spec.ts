/*
  Component: Simulates upvote/downvote in template uses custom event to update myVote property bindings
  Test: each function and totalVote state as well as custom event being fired or not
*/
import {VoterComponent} from'./voter.component';
fdescribe('Exercise 3: Vote component, custom events',() => {
  let voteCmp :VoterComponent;
  beforeEach(() =>{
        voteCmp = new VoterComponent()
 })
 it('Initial Vote Count',() => {
       expect(voteCmp.myVote).toBe(0);
 })
 it('Initial Others Vote Count',() => {
       expect(voteCmp.othersVote).toBe(0);
 })
  it('Upvote to higher value',() => {

  })
  it('Upvote fails if already upvoted',() => {

  })
  it('Downvote to lower value',() => {

  })
  it('Downvote fails if already downvoted',() => {

  })
  it('totalVotes returns sum when 0',() => {

  })
  it('totalVotes returns sum when positive',() => {

  })
  it('totalVotes returns sum when negative',() => {

  })
});
