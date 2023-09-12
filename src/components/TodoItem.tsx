import React, { forwardRef, useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoItem = forwardRef<HTMLInputElement, { index: number; todo: string }>(
  ({ index, todo }, ref) => {
    const context = useContext(TodoContext);

    const update = () => {
      const data = prompt("수정할 내용 입력");
      if (data) {
        context?.updateTodo(index, data);
        return;
      }
      alert("내용 없음");
    };

    return (
      <div className="w-full h-[3rem] text-lg items-center bg-white border-[1px] pl-4 pr-4 flex justify-between">
        {todo}
        <button onClick={() => context?.deleteTodo(index)}>삭제</button>
        <button onClick={update}>수정</button>
        <input
          type="checkbox"
          onChange={(e) => context?.checkTodo(todo)}
          ref={ref}
        />
      </div>
    );
  }
);
TodoItem.displayName = "TodoItem";

export default TodoItem;
