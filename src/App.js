import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widget";

function App() {
  const user = null;
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />{" "}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
