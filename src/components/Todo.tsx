import { useContext, useRef, useState } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./TodoContext";

function TodoList() {
  const context = useContext(TodoContext);
  const [text, setText] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (context && text.trim() !== "") {
      context.addTodo(text);
      setText("");
    }
  };

  return (
    <div className="h-full w-1/2 bg-black rounded-lg flex items-center flex-col overflow-auto">
      <span className="text-4xl font-bold text-white mt-4">TodoList</span>
      <form onSubmit={handleAddTodo} className="w-4/5 h-[4rem]">
        <input
          className="w-full h-full pl-4 text-xl mt-4 outline-none"
          placeholder="투두 추가"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </form>
      <div className="flex flex-col w-4/5 mt-4">
        {context?.todos.map((item: string, idx: number) => (
          <TodoItem key={idx} index={idx} todo={item} ref={ref} />
        ))}
      </div>
    </div>
  );
}
export default TodoList;
