// In here we need to test a component initializing from a service, this will require a fake service to decouple the component from the TodoService
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import {Observable,of,throwError} from 'rxjs';

describe('TodosComponent', () => {
 let component: TodosComponent;
 let  service :TodoService;
  beforeEach(() => {
        service = new TodoService(null);
        component = new TodosComponent(service);
  });
// NgOnInit
  it('Should set todos property with items from server', () => {
        // With a spy we are able to stub out different parts of the function of an object here we stub out getToDos() which takes no params and returns an observable
        spyOn(service,'getTodos').and.callFake(() => {
             return of([1,2,3]);
       });
       component.ngOnInit();
       expect(component.todos.length).toBe(3)
  });
 // Add
 it('Add: Saves item when added',function(){

       let result = spyOn(service,'add').and.callFake(function(t){
             return of()
       });
       component.add();
       expect(result).toHaveBeenCalled();
 });
 it('Add: New ToDo is returned',function(){
       spyOn(service,'add').and.callFake((x) =>{
             x = {id:'Foo'};
             return of(x);
       });
       component.add();
       expect(component.todos[0].hasOwnProperty('id')).toBeTruthy();
});
it('Add: Error is handled',function(){
      let err = 'Error';
      let result = spyOn(service,'add').and.callFake(function(t){
            return throwError(err);
      });
      component.add();
      expect(component.message).toBe(err);
});

//Delete

it('Delete on confirm',() => {
            // We can't have windows popping up in an automated test so we force the response
            spyOn(window,'confirm').and.returnValue(true);
            let spy = spyOn(service,'delete').and.returnValue(of());
            component.delete(12);
            expect(spy).toHaveBeenCalledWith(12);
});

it('User did NOT confirm', () => {
      // We can't have windows popping up in an automated test so we force the response
      spyOn(window,'confirm').and.returnValue(false);
      let spy = spyOn(service,'delete').and.returnValue(of());
      component.delete(12);
      expect(spy).not.toHaveBeenCalledWith(12);
});

});
