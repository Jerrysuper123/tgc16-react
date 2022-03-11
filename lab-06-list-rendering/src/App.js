import "./App.css";
import TodoList from "./TodoList";

// to understand list rendering
//1. jsx is just js objects
//2. we can render array of jsx objects

function App() {
  // you can set up variables in app function
  let bulletPoints = [<li>1</li>, <li>2</li>, <li>3</li>];
  return (
    <div>
      <h1>To dos</h1>
      {bulletPoints}
      <TodoList />
    </div>
  );
}

export default App;
