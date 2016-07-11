import { Todo } from "./todo.model";

/**
 * Service layer for `Todo`'s
 */
export class TodoService {

  private todos: Array<Todo>;

  constructor() {
    this.todos = [];
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  getTodos(): Array<Todo> {
    return this.todos;
  }
}
