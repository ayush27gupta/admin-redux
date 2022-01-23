import "./App.css";
import Main from "./components/Main";
// import { StudentProvider } from "./components/context/StudentContext";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      {/* <StudentProvider> */}
      <div className="App">
        <Main />
      </div>
      {/* </StudentProvider> */}
    </Provider>
  );
}

export default App;
