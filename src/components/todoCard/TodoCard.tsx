import type { ReactNode } from "react";

interface TodoCardProps {
    id: number;
    handleEditTodo: (index: number) => void;
    handleDeleteTodo: (index: number) => void;
    children: ReactNode;
}

export default function TodoCard({ children, handleDeleteTodo, id, handleEditTodo }: TodoCardProps) {

    return (
        <li className='todoItem' >
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleEditTodo(id)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(id)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}

