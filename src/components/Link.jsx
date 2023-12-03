import { useTodo } from "../useTodo";
import classNames from "classnames";
import { PropTypes } from "prop-types";

export const Link = ({ children, filter }) => {
  const [{ visibilityFilter }, dispatch] = useTodo();

  return (
    <a
      href="#"
      type="button"
      className={classNames({ selected: filter === visibilityFilter })}
      style={{ cursor: "pointer" }}
      onClick={() =>
        dispatch({
          type: "SET_VISIBILITY",
          payload: {
            visibilityFilter: filter,
          },
        })
      }
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired,
};
