import { TodoItem } from "./TodoItem";
import { getFilteredTodos } from "../stores/utils";
import { Reorder } from "framer-motion";

export const TodoList = ({ todos, visibilityFilter, setTodos }) => (
  <>
    <Reorder.Group values={todos} onReorder={setTodos} className="todo-list">
      {getFilteredTodos(todos, visibilityFilter).map((todo) => (
        <Reorder.Item key={todo.id} value={todo}>
          <TodoItem index={todo.id} todo={todo} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  </>
);
