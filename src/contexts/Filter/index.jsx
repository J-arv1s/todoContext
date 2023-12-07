import React, { useState, useContext, createContext } from "react";

const FilterContext = createContext(null)

export const FilterProvider = ({ children }) => {
    const [ filteredTodos, setFilteredTodos ] = useState([])

    return (
        <FilterContext.Provider value={{ filteredTodos, setFilteredTodos }}>
            { children }
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)