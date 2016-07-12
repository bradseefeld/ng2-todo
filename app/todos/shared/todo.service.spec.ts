import { TodoService } from "./todo.service";
import { Todo } from "./todo.model";

describe("TodoService", () => {
  describe("#getTodo", () => {
    it("returns an emtpy array of todos", () => {
      let service = new TodoService();
      return service.getTodos().subscribe(todos => {
        expect(todos.length).toEqual(0);
      });
    });
  });

  describe("#addTodo", () => {
    it("adds a todo", () => {
      let service = new TodoService();
      let todo = new Todo("foo");
      return service.addTodo(todo).subscribe((isSaved) => {
        expect(isSaved).toBeTruthy();
      });
    });
  });
});
