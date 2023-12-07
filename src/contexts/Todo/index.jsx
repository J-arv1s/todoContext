import React, { useState, useContext, createContext } from "react";

const TodoContext = createContext(null)

export const TodoProvider = ({ children }) => {
    const [ todos, setTodos ] = useState([])

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            { children }
        </TodoContext.Provider>
    )
}

export const useTodo = () => useContext(TodoContext)