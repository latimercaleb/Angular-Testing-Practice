// In this one, we have a simple function that returns an array
// We need to ensure that the array contains everything that it's supposed to, since order doesn't matter here we test each one seperately.
import {getCurrencies} from './getCurrencies';
describe('Currencies', function(){
      it('Contains all elements',() =>{
            let result = getCurrencies();
            expect(result).toContain('USD');
            expect(result).toContain('EUR');
            expect(result).toContain('AUD');
      })
})
