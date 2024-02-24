const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('calling toArray returns list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('calling first returns first item added to array', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('calling last returns last item added to array', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('calling shift removes and returns first item from array', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.first()).toEqual(todo2);
  });

  test('calling pop removes and returns the last item from array', () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('calling isDone on list returns true if every item is done', () => {
    todo1.markDone();
    todo2.markDone();
    todo3.markDone();
    expect(list.isDone()).toEqual(true);
  });

  test('Adding non-Todo item raises an exception', () => {
    expect(() => list.add('Test')).toThrow(TypeError);
    expect(() => list.add(1)).toThrow(TypeError);
  });

  test('itemAt raises Reference Error for index with no item', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(1)).toEqual(todo2);
    expect(() => list.itemAt(5)).toThrow(ReferenceError);
  });

  test('markDoneAt raises Reference Error for index with no item', () => {
    
    // expect(list.markDoneAt(1)).
    expect(() => list.markDoneAt(5)).toThrow(ReferenceError);
    list.markDoneAt(0);
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
  });

  test("markUndoneAt raises Reference Error for index with no item", () => {
    expect(() => list.markUndoneAt(5)).toThrow(ReferenceError);
    todo1.markDone();
    list.markUndoneAt(0);
    expect(todo1.isDone()).toBe(false);
  });

  test("markAllDone marks all todos done", () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);

  });

  test("removeAt raises reference error if not index with no todo item", () => {
    expect(() => list.removeAt(4)).toThrow(ReferenceError);
    expect(list.removeAt(0)).toEqual([todo1]);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test("toString shows completed todo", () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    list.markDoneAt(0);
    expect(list.toString()).toBe(string);
  });

  test("toString shows all completed todos", () => {
    
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    list.markAllDone();

    expect(list.toString()).toBe(string);
  });

  test("forEach iterates through entire list", () => {
    // let sum = 0;
    // function callback() {
    //   sum += 1;
    // }
    // list.forEach(callback);

    // expect(sum).toBe(3);

    let result = [];
    list.forEach(todo => result.push(todo));
  
    expect(result).toEqual([todo1, todo2, todo3]);
  })


});