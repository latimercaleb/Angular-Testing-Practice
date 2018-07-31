// First ensure that the string is formatted correctly and in the result
import {greet} from'./greet';
describe('Greetings Test', ()=>{
      it('Should contain the entered param', () =>{
            const cmp = greet('Foo');
            expect(cmp).toContain('Foo');
      });
      it('Should return type string', () => {
            //Ideally, you should use typescript to handle this by assigning a string type to the function
            const cmp = greet('Foo');
            expect(typeof(cmp)).toBe('string');
      })
});
