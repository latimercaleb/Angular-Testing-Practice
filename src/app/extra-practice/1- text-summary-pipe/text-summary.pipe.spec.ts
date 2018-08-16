import {TextSummaryPipe} from './text-summary.pipe';
describe('TextSummaryPipe', function(){
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
});