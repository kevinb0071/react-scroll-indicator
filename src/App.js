import "./App.css";
import ScrollIndicator from "./components/scroll-indicator";

function App() {
  return (
    <div className="App">
      {/**
       * Scroll Inidicator Component
       */}

      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
