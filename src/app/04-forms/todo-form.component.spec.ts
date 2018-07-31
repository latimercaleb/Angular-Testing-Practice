// For forms, ensure that the controls are there and if there is validation, test it
import { TodoFormComponent } from './todo-form.component';
import {FormBuilder} from '@angular/forms';
describe('TodoFormComponent', () => {
  var component: TodoFormComponent;

  beforeEach(() => {
        component = new TodoFormComponent(new FormBuilder());
  });

  it('2 controls', () => {
        expect(component.form.contains('name')).toBeTruthy();
        expect(component.form.contains('email')).toBeTruthy();

  });

  it('name is required', () => {
        let nameCtrl = component.form.get('name');
        nameCtrl.setValue('');
        expect(nameCtrl.valid).toBeFalsy();
  });
});
