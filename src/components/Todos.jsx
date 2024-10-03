
import { useSelector , useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
   const todos = useSelector((state) => state.todos)
   const dispatch = useDispatch(); 
   return (
    <div className="flex flex-col items-center mt-12">
      <h2 className="text-2xl font-bold mb-4">Your Todos</h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-700 rounded-lg py-2 px-4 w-80 text-lg"
          >
            <span>{todo.text}</span>
            <button
              className="text-red-500 hover:text-red-700 font-bold"
              onClick={() => dispatch(removeTodo(todo.id))} // Dispatch action to remove todo
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;