import { TodoService } from "./todo.service";
import { Todo } from "./todo.model";

describe("TodoService", () => {
  describe("#getTodo", () => {
    it("returns an emtpy array of todos", () => {
      let service = new TodoService();
      expect(service.getTodos().length).toEqual(0);
    });
  });

  describe("#addTodo", () => {
    it("adds a todo", () => {
      let service = new TodoService();
      expect(service.getTodos().length).toEqual(0);
      service.addTodo(new Todo("foo"));
      expect(service.getTodos().length).toEqual(1);
    });
  });
});
