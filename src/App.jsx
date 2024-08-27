import "./App.scss";
import ScrollButton from "./Components/ScrollButton/ScrollButton.jsx";
import CustomRouter from "./routes.jsx";

function App() {
  return (
    <div className="App">
      <CustomRouter />
      <ScrollButton />
    </div>
  );
}

export default App;
