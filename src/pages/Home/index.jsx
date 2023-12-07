import React from 'react'
import { useState, useEffect } from 'react'
import { TodoForm, TodoList } from '../../components'
import { useTodo } from '../../contexts/Todo'
import { useFilter } from '../../contexts/Filter'


const Home = () => {
    const [inputText, setInputText] = useState('');
    const [status, setStatus] = useState('all');

    const { todos } = useTodo() // using context
    const { setFilteredTodos } = useFilter() // using context

    useEffect(() => {
        filterHandler()
    }, [status, todos])
    
    function filterHandler() {
        if(status === 'completed') {
            setFilteredTodos(todos.filter(todo => todo.completed === true))
        } else if (status === 'uncompleted') {
            setFilteredTodos(todos.filter(todo => todo.completed === false))
        } else {
            setFilteredTodos(todos);
        }
    }

    return (
        <>
        <header>Sarah's Todo List</header>
        <TodoForm inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
        <TodoList />
        </>
    )
}

export default Home