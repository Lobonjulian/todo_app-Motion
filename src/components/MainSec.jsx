import { useTodo } from "../useTodo";
import { Footer } from "./Footer";
import { TodoList } from "./TodoList";

const getComputedCount = (todos) =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);

const MainSec = () => {
  const [{ todos, visibilityFilter }, dispatch] = useTodo();
  const todosCount = todos.length;
  const completedCount = getComputedCount(todos);

  return (
    <div className="main">
      {!!todosCount && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            defaultChecked={completedCount === todosCount}
          />
          <label onClick={() => dispatch({ type: "COMPLETE_ALL" })} />
        </span>
      )}
      <TodoList todos={todos} visibilityFilter={visibilityFilter} />
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={() => {
            dispatch({ type: "CLEAR_COMPLETED" });
          }}
        />
      )}
    </div>
  );
};

export default MainSec;
