import { useEffect, useState } from "react";
import "./App.scss";
import ScrollButton from "./Components/ScrollButton/ScrollButton.jsx";
import CustomRouter from "./routes.jsx";
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen.jsx";

function App() {
  
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3750);
  }, []);

  return (
    <div className={"App" + (Loading ? " Loading" : "")}> 
      <WelcomeScreen loading={Loading} />
      <CustomRouter />
      <ScrollButton />
    </div>
  );
}

export default App;
