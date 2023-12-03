import { TodoProvider } from "../TodoProvider";
import { reducer } from "../stores/reducer";
import Header from "./Header";
import MainSec from "./MainSec";

const initialStates = {
  todos: [
    {
      text: "HTML",
      completed: true,
      id: 0,
    },
    {
      text: "CSS",
      completed: true,
      id: 1,
    },
    {
      text: "JS",
      completed: false,
      id: 2,
    },
    {
      text: "React",
      completed: false,
      id: 3,
    },
  ],

  visibilityFilter: "All",
};

const App = () => (
  <TodoProvider initialState={initialStates} reducer={reducer}>
    <div>
      <Header />
      <MainSec />
    </div>
  </TodoProvider>
);

export default App;
