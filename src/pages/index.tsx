import TodoList from "@/components/Todo";
import { TodoContext } from "@/components/TodoContext";
import { LogType } from "@/type/Todo.type";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [log, setLog] = useState<LogType[]>([]);

  const makeLog = (stat: string, value: string) => {
    return {
      title: value,
      stat: stat,
      date: new Date(),
    }
  }

  const addTodo = (title: string) => {
    setTodos([...todos, title]);
    setLog([...log, makeLog("added", title)]);
  };

  const checkTodo = (value: string) => {
    setLog([...log, makeLog("checked", value)]);
  };

  const deleteTodo = (index: number) => {
    const newLog = [...log, makeLog("deleted", todos[index])]
    const newTodo = todos.filter((item, i) => {
      if (i !== index) return item;
    });
    setLog(newLog);
    setTodos(newTodo);
  };

  const updateTodo = (index: number, value: string) => {
    const todo = [...todos];
    todo[index] = value;
    setLog([...log, makeLog("modified", value)]);
    setTodos(todo);
  };

  return (
    <div className="w-full h-full flex">
      <TodoContext.Provider
        value={{ todos, addTodo, checkTodo, updateTodo, deleteTodo }}
      >
        <TodoList />
      </TodoContext.Provider>

      <div className="w-1/2 bg-gray-400 border-[1px] rounded-lg flex items-center flex-col overflow-auto">
        <span className="text-4xl font-bold text-black mt-4">LOG</span>
        <div className="mt-4 flex flex-col w-4/5">
          {log.map((data, idx) => {
            return (
              <div className="flex flex-col bg-gray-200 px-4 py-2 mb-5" key={idx}>
                <span>date : {data.date.toLocaleDateString()}</span>
                <span>title : {data.title}</span>
                <span>status : {data.stat}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
