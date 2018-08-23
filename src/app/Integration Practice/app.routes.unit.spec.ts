import {routes} from './app.routes';
import {UsersComponent} from './users/users.component';
fdescribe('Routes', () => {
  it('should contain /users', function(){
    expect(routes).toContain({path: 'users', component: UsersComponent})
  });
})
