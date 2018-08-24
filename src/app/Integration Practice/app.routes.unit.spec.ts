import {routes} from './app.routes';
import {UsersComponent} from './users/users.component';
describe('Routes', () => {
  it('should contain /users', function(){
    expect(routes).toContain({path: 'users', component: UsersComponent})
  });
})
