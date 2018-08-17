/*
  Component: Renders a clickable icon which toggle css and count on click
  Test: Both end states of the class, being liked and unliked
*/
import {LikeComponent} from './like.component';
describe('Exercise 2: LikeComponent, testing events',() => {
  let inst: LikeComponent;
  beforeEach(() => {
    inst = new LikeComponent();
  })
  it('Initially unliked', () => {
    expect(inst.iLike).toBe(false);
  })
  it('Initially likecount is 0', () => {
    expect(inst.totalLikes).toBe(0);
  })
  it('Increases like count', () => {
    inst.click();
    expect(inst.totalLikes).toBe(1);
  })
  it('Decreases like count', () => {
    inst.click();
    inst.click();
    expect(inst.totalLikes).toBe(0);
  })
  it('Icon is liked', () => {
    inst.click();
    expect(inst.iLike).toBe(true);
  })
  it('Icon is unliked', () => {
    inst.click();
    inst.click();
    expect(inst.iLike).toBe(false);
  })
});
