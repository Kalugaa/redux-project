import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, { payload }) => { state.todos = [...state.todos, payload] },
        deleteTodo: (state, { payload }) => { state.todos = state.todos.filter(todo => todo.id !== payload) },
        editTodo: (state, { payload }) => {
            state.todos = state.todos.map((todo) =>
                todo.id === payload.id ? { ...todo, text: payload.text } : todo
            );
        },
    },
});
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer

export const selectTodos = state => state.todos