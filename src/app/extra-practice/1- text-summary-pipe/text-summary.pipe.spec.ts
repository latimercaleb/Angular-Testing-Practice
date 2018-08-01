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

            });
            it('Transform returns substring' ,function(){

            });
});
