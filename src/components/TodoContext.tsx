// import { createContext } from "react";

// export const TodoContext = createContext<{
//   todos: string[];
//   addTodo: (title: string) => void;
//   checkTodo: (value: string) => void;
//   deleteTodo: (index: number) => void;
//   updateTodo: (index: number, value: string) => void;
// } | null>(null);

import { LogType } from "@/type/Todo.type";
import { atom } from "recoil";

export const TodoState = atom<string[]>({
  key: "TodoState",
  default: [],
})

export const LogState = atom<LogType[]>({
  key: "LogState",
  default: [],
})