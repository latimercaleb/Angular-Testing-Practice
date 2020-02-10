/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TodosComponent } from './todos.component';
import {TodoService} from './todo.service';
import {Observable,of} from 'rxjs';

// Previously dependencies were "faked" using spies, this approach doesn't work with integration tests, dependencies must be added via a provider & import property in the metadata object of configureTestingModule
describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ TodosComponent ],
      providers: [TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); // Removing because calling this calls ngOnInit() which ruins the point of the stub
  });

  it('should load todos from server', () => {
    let service = TestBed.get(TodoService); // Brings dependency in at the module level as a singleton, must be imported as a provider in app module or if providers are added in at the component level
    //let service = fixture.debugElement.injector.get(TodoService); // Second means of grabbing it natively as a direct import
    let t = of([1,2,3]);
    spyOn(service,'getTodos').and.returnValue(t);
    fixture.detectChanges();
    console.log(t);
    console.log(component.todos);
    expect(component.todos.length).toBe(3);

  });

  it('should load todos from via promise on server', async(() => {
    let service = TestBed.get(TodoService); // Brings dependency in at the module level as a singleton, must be imported as a provider in app module or if providers are added in at the component level
    //let service = fixture.debugElement.injector.get(TodoService); // Second means of grabbing it natively as a direct import
    let t = Promise.resolve([1,2,3]);
    spyOn(service,'getTodosPromise').and.returnValue(t);
    fixture.detectChanges();
    console.log(t);
    console.log(component.todos);
    // Calls async resolve when all async processes complete, or could use fakeAsync as the async wrapper, remove fixtureWhenStable and call tick, both of which need to be imported. When dealing with promises or async ops the test function must use either async or fakeAsync to test properly
    fixture.whenStable().then(() => {
          expect(component.todos.length).toBe(3);
   });

}));

});
