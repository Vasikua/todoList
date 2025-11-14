import { useState, useEffect } from "react";
import TodoInput from "./components/todoInupt/TodoInupt";
import TodoList from "./components/todoList/TodoList";

export interface Todo {
  id: number;
  todoValue: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoValue, setTodoValue] = useState<string>('')

  function persistData(newList: Todo[]) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo: string) {
    if (!newTodo) return;
    const todoExists = todos.some((todo) => todo.todoValue === newTodo);
    if (todoExists) return;
    const newTodoObject: Todo = { todoValue: newTodo, id: Date.now() };
    const newTodoList = [...todos, newTodoObject];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(id: number) {
    const newTodoList = todos.filter((todo) => {
      return todo.id !== id
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(id: number) {
    const valueToBeEdited = todos.find((todo) => todo.id === id)
    if (valueToBeEdited) {
      setTodoValue(valueToBeEdited.todoValue)
    }
    handleDeleteTodo(id)
  }

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (!localTodos) return;

    try {
      const parsed = JSON.parse(localTodos).todos as Todo[];
      setTodos(parsed);
    } catch (e) {
      console.error("Error parsing todos:", e);
    }
  }, []);

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App