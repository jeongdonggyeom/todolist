import { createContext } from "react";

export const TodoContext = createContext<{
  todos: string[];
  addTodo: (title: string) => void;
  checkTodo: (value: string) => void;
  deleteTodo: (index: number) => void;
  updateTodo: (index: number, value: string) => void;
} | null>(null);
