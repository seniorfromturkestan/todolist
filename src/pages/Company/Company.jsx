import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../AddTodo/TodoList";

const Company = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'Backend developer',
      status: true
    },
    {
      id: 2,
      title: 'Frontend developer',
      status: true
    },
    {
      id: 3,
      title: 'SQL developer',
      status: true
    }
    ,
    {
      id: 4,
      title: 'DevOps',
      status: true
    }
    ,
    {
      id: 5,
      title: 'iOS Developer',
      status: true
    }
  ]);

  return (
    <div className="max-w-[1240px] mx-auto">
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default Company;
