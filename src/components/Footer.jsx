import { PropTypes } from "prop-types";
import { Link } from "./Link";

const FILTER_TITLES = ["All", "Active", "Completed"];

export const Footer = ({ activeCount, completedCount, onClearCompleted }) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{activeCount || "No"}</strong>{" "}
      {activeCount === 1 ? "item" : "items"} left
    </span>
    <ul className="filters">
      {FILTER_TITLES.map((filter) => (
        <li key={filter}>
          <Link filter={filter}>{filter}</Link>
        </li>
      ))}
    </ul>
    {!!completedCount && (
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    )}
  </footer>
);

Footer.propTypes = {
  activeCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};
