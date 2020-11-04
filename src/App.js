import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
     <Switch>
        {/* more pages to be added here later */}
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
