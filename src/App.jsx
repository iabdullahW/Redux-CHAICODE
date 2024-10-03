// import React from 'react';
import AddTodo from './components/AddTodo'; // Import AddTodo
import Todos from './components/Todos'; // Import Todos

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-8">Todo App</h1>
      <AddTodo /> {/* AddTodo Component */}
      <Todos /> {/* Todos Component */}
    </div>
  );
}

export default App;
