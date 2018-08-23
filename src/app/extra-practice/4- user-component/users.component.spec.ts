/*
  Component: Talks to service to fetch data from an external resource, can delete data as well but we need to stub out the service in tests using spies
  Test: Test component features from service, not the service itself
*/
import {UsersComponent} from './users.component';
import {UserService} from './user.service';
import {Observable,of,throwError} from 'rxjs';
describe('Exercise 4: Compnents & Services',() => {
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

  })
})
