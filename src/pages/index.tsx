import TodoList from "@/components/Todo";
import { LogState } from "@/components/TodoContext";
import { useRecoilValue } from "recoil";

export default function Home() {
  const log = useRecoilValue(LogState);

  return (
    <div className="w-full h-full flex">
      <TodoList />
      <div className="w-1/2 bg-gray-400 border-[1px] rounded-lg flex items-center flex-col overflow-auto">
        <span className="text-4xl font-bold text-black mt-4">LOG</span>
        <div className="mt-4 flex flex-col w-4/5">
          {log.map((data, idx) => {
            return (
              <div
                className="flex flex-col bg-gray-200 px-4 py-2 mb-5"
                key={idx}
              >
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
