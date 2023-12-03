import { useTodo } from "../useTodo";
import { TodoTextInput } from "./TodoTextInput";

const Header = () => {
  const [, dispatch] = useTodo();

  return (
    <header className="header">
      <h1>TODO LIST</h1>
      <TodoTextInput
        newTodo
        onSave={(text) => {
          if (text.length !== 0) {
            dispatch({
              type: "ADD_TODO",
              payload: { text },
            });
          }
        }}
        placeholder="¿que Tarea desea hacer?"
      />
    </header>
  );
};

export default Header;
