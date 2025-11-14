import TodoCard from '../todoCard/TodoCard'
import type { Todo } from "../../App";

interface TodoListProps {
    todos: Todo[];
    handleEditTodo: (index: number) => void;
    handleDeleteTodo: (index: number) => void;
}

export default function TodoList({ todos, handleEditTodo, handleDeleteTodo }: TodoListProps) {



    return (
        <ul className='main'>
            {todos.map((todo) => {
                return (
                    <TodoCard
                        id={todo.id}
                        handleEditTodo={handleEditTodo}
                        handleDeleteTodo={handleDeleteTodo}
                        key={todo.id}
                    >
                        <p>{todo.todoValue}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}