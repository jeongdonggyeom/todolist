import { useRef } from "react";
import TodoItem from "./TodoItem";
import { useRecoilValue } from "recoil";
import { TodoState } from "./TodoContext";
import { useTodo } from "@/hooks/useTodo";
import { useForm } from "react-hook-form";

function TodoList() {
  const { addTodo } = useTodo();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      text: "",
    },
  });
  const todos = useRecoilValue(TodoState);

  const ref = useRef<HTMLInputElement>(null);

  const handleAddTodo = (data: { text: string }) => {
    if (data.text.trim() !== "") {
      addTodo(data.text);
      setValue("text", "");
    }
  };

  return (
    <div className="h-full w-1/2 bg-black rounded-lg flex items-center flex-col overflow-auto">
      <span className="text-4xl font-bold text-white mt-4">TodoList</span>
      <form onSubmit={handleSubmit(handleAddTodo)} className="w-4/5 h-[4rem]">
        <input
          className="w-full h-full pl-4 text-xl mt-4 outline-none"
          placeholder="투두 추가"
          {...register("text")}
        />
      </form>
      <div className="flex flex-col w-4/5 mt-4">
        {todos.map((item: string, idx: number) => (
          <TodoItem key={idx} index={idx} todo={item} ref={ref} />
        ))}
      </div>
    </div>
  );
}
export default TodoList;
