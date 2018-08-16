/*
  Component: Takes an input and returns one of two possible outputs
  Test: Output consistency, and assignment of default values
*/
import {TextSummaryPipe} from './text-summary.pipe';
describe('Exercise 1: TextSummaryPipe Testing', function(){
            let t :TextSummaryPipe;
            beforeEach(function(){
                  t = new TextSummaryPipe();
            });
            it('Transform returns empty if no value',function(){
                  let result = t.transform('',2);
                  console.log('Result is: ',result)
                  console.log(typeof(result));
                  expect(result).toBe('');
            });
            it('Transform returns value',function(){
                  let result = t.transform('Apples',7);
                  console.log('Result is: ',result)
                  console.log(typeof(result));
                  expect(result).toBe('Apples');
            });
            it('Transform returns substring' ,function(){
                  let result = t.transform('AppleJacksWithBadSyntax',2);
                  console.log('Result is: ',result)
                  console.log(typeof(result));
                  expect(result).toBe('Ap...');
            });
            it('Sets limit to 10 if no arg is given', () =>{
              let ans = t.transform('1234567890')
              expect(ans).toBe('1234567890');
            })
});
