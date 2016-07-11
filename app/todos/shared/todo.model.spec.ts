import { Todo } from "./todo.model";

describe("Todo", () => {
  describe("construction", () => {
    it("takes in a name and sets the name property", () => {
      let name = "foo";
      let todo = new Todo(name);
      expect(todo.name).toEqual(name);
    });
  });
});
