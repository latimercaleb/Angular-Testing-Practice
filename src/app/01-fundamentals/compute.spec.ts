import {compute} from './compute';
describe('Compute: Unit Test', function(){
            it('Computes positive input',() =>{
                  const val = compute(10);
                  expect(val).toBe(11);
            });
            it('Computes negative input',() =>{
                  const val = compute(-10);
                  expect(val).toBe(0);
            });
            it('Computes zero input',() =>{
                  const val = compute(0);
                  expect(val).toBe(1);
            });
});
