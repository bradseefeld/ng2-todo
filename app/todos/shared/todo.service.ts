import { Todo } from "./todo.model";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

/**
 * Service layer for `Todo`"s
 */
export class TodoService {

  private _todos: BehaviorSubject<Array<Todo>>;

  public todos: Observable<Array<Todo>>;

  constructor() {
    this._todos = new BehaviorSubject([]);
    this.todos = this._todos.asObservable();
  }

  /**
   * Add a Todo to our internal Todo store. Adding a Todo could take a while as we
   * check the user's permissions, perform validations, and send the data to the server
   * for persisting.
   *
   * @param todo  The Todo to add
   * @return An observable that emits whether the todo was added or rejected.
   */
  addTodo(todo: Todo): Observable<Boolean> {
    let timeout = (Math.random() * 6) + 1;
    timeout *= 1000; // ms
    timeout = 0;
    return Observable.create((observer) => {
      // setTimeout(function() {
      this._todos.getValue().push(todo);
      observer.next(true);
      observer.complete();
      // }, timeout);
    });
  }

  /**
   * Fetch all the Todos available.
   *
   * @return An observable which provides all the todos.
   */
  getTodos(): Observable<Array<Todo>> {
    return this.todos;
  }
}
