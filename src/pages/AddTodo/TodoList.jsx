import { useEffect, useState } from "react"
import Button from "../../components/Button/Button"
import {AiOutlineClose} from 'react-icons/ai'
import { AiFillEdit } from "react-icons/ai"
import { AiFillSave } from "react-icons/ai"

const TodoList = ({ todo, setTodo }) => {
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState("");
    const [filtered, setFiltered] = useState(todo);

    useEffect(() => {
        setFiltered(todo.filter((item) => item.status !== false)); 
    }, [todo]);

    const deleteTodo = (id) => {
        let newTodo = todo.map((item) =>
            item.id === id ? { ...item, status: false } : item
        );
        setTodo(newTodo);
    };

    const editTodo = (id, title) => {
        setEdit(id);
        setValue(title);
    };

    const save = (id) => {
        let newTodo = todo.map((item) =>
            item.id === id ? { ...item, title: value } : item
        );
        setTodo(newTodo);
        setEdit(null);
    };

    const todoFilter = (status) => {
        if (status === "all") {
            setFiltered(todo.filter((item) => item.status !== false)); 
        } else {
            const newTodo = todo.filter((item) => item.status === status);
            setFiltered(newTodo);
        }
    };

    return (
        <div className="max-w-[1240px] mx-auto ">
            <div className="px-4 mt-3">
                <Button onClick={() => todoFilter("all")}>Tasks</Button>
                <Button onClick={() => todoFilter(false)}>Deleted tasks</Button>
            </div>
            {filtered.map((item) => (
                <div
                    key={item.id}
                    className="flex p-4 items-center justify-between border-b text-xl md:text-3xl h-auto"
                >
                    <div
                        className="w-[200px] sm:w-[410px] md:w-[500px] lg:w-[800px] break-words"
                    >
                        {edit === item.id ? (
                            <div className="flex">
                                <input
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    className="w-[400px] border text-sm border-black px-1 sm:px-3 rounded-lg h-10 sm:h-12 md:text-xl outline-black"
                                />
                                <Button onClick={() => save(item.id)}>
                                    <AiFillSave />
                                </Button>
                            </div>
                        ) : (
                            <div>{item.title}</div>
                        )}
                    </div>
                    <div className="space-x-2">
                        <Button onClick={() => editTodo(item.id, item.title)}>
                            <AiFillEdit />
                        </Button>
                        <Button onClick={() => deleteTodo(item.id)}>
                            <AiOutlineClose />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
