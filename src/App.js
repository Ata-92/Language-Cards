import './App.css';
import react from "./assets/react.svg";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={react} alt="React Logo" width="20%"/>
        <Card />
      </div>
    </div>
  );
}

export default App;
