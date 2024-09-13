import "./App.css";
import { useBearStore } from "./store/countStore";

function App() {
  const { count, increaseCount, decreaseCount, resetCount } = useBearStore();
  const buttonClass: string =
    "px-2 py-1 border rounded-md hover:bg-gray-200 transition-all bg-gray-100";
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen">
      <p className="text-lg font-bold">
        Count: <span>{count}</span>
      </p>
      <div className="flex items-center gap-4">
        <button onClick={() => increaseCount()} className={buttonClass}>
          Increment
        </button>
        <button onClick={() => resetCount()} className={buttonClass}>
          Reset
        </button>
        <button
          onClick={() => {
            if (count > 0) {
              decreaseCount();
            }
          }}
          className={buttonClass}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
