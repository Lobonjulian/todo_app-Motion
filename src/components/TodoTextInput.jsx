import { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const TodoTextInput = ({
  todoText,
  placeholder,
  editing,
  newTodo,
  onSave,
}) => {
  const [text, setText] = useState(todoText || "");

  const handleSubmit = (e) => {
    const inputText = e.target.value.trim();
    if (e.which === 13) {
      onSave(inputText);
      if (newTodo) {
        setText("");
      }
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = (e) => {
    if (!newTodo) {
      onSave(e.target.value);
    }
  };

  return (
    <>
      <input
        className={classnames({
          edit: editing,
          "new-todo": newTodo,
        })}
        value={text}
        onChange={handleChange}
        onKeyDown={handleSubmit}
        onBlur={handleBlur}
        placeholder={placeholder}
        type="text"
        autoFocus
      />
    </>
  );
};

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool,
};
