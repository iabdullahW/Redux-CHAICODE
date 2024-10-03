import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state for todos
const initialState = {
  todos: [
    {
      id: 1,
      text: "abdullah", // Example todo
    },
  ],
};

// Create the slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Action to add a new todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generate unique ID
        text: action.payload, // Use payload as todo text
      };
      state.todos.push(todo);
    },
    // Action to remove a todo by id
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export the actions
export const { addTodo, removeTodo } = todoSlice.actions;

// Export the reducer
export default todoSlice.reducer;
