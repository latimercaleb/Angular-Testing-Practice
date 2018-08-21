/*
  Component: Talks to service to fetch data from an external resource, can delete data as well but we need to stub out the service in tests using spies
  Test: Test component features from service, not the service itself
*/
import {UsersComponent} from './users.component';
import {UserService} from './user.service';
import {Observable,of,throwError} from 'rxjs';
fdescribe('Exercise 4: Compnents & Services',() => {
  describe('Users Component should, ',() => {
    let service: UserService;
    let users: UsersComponent;
    beforeEach(() => {
      service = new UserService(null);
      users = new UsersComponent(service);
    });
    it('fetches users properly', function(){
      let ex = [{"id":1,"name":"test"},{"id":2,"name":"tset"},{"id":3,"name":"stet"}];
      spyOn(service,'getUsers').and.callFake(() => {
        return of(ex)
      });
      users.ngOnInit();
      expect(users.users).toEqual(ex);
    })
    it('delete when confirmed', function(){
      let simpleObj = {
           "id": 1,
           "name": "test"
     };
      users.users.push(simpleObj);
      spyOn(window,'confirm').and.returnValue(true);
      let spy = spyOn(service,'deleteUser').and.returnValue(of());
      users.deleteUser(simpleObj);
      expect(spy).toHaveBeenCalledWith(simpleObj);
    })

    it('not delete if not confirmed', function(){
      spyOn(window,'confirm').and.returnValue(false);
      let spy = spyOn(service,'deleteUser').and.returnValue(of());
      users.deleteUser(102);
      expect(spy).toHaveBeenCalledWith(102);
    })
  })
})
