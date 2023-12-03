import { useTodo } from "../useTodo";
import { Footer } from "./Footer";
import { TodoList } from "./TodoList";
import { motion } from "framer-motion";

const getComputedCount = (todos) =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);

const MainSec = () => {
  const [{ todos, visibilityFilter }, dispatch] = useTodo();
  const todosCount = todos.length;
  const completedCount = getComputedCount(todos);

  return (
    <motion.div layount className="main">
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
      <TodoList
        todos={todos}
        visibilityFilter={visibilityFilter}
        setTodos={(todos) =>
          dispatch({
            type: "SET_TODOS",
            payload: { todos },
          })
        }
      />
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={() => {
            dispatch({ type: "CLEAR_COMPLETED" });
          }}
        />
      )}
    </motion.div>
  );
};

export default MainSec;
