import { LogState, TodoState } from "@/components/TodoContext";
import { useRecoilState } from "recoil";

export const useTodo = () => {
  const [todos, setTodos] = useRecoilState(TodoState);
  const [log, setLog] = useRecoilState(LogState);

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

  return {
    addTodo,
    checkTodo,
    deleteTodo,
    updateTodo,
  }
}