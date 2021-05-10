import './App.css';
import react from "./assets/react.svg";
import Card from "./components/card/Card";
import { categories } from './helper/data';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={react} alt="React Logo" width="20%"/>
        <div className="language-cards">
          <h1>Languages</h1>
          {categories.map((category) => (<Card name={category.name} img={category.img} options={category.options}/>))}
        </div>
      </div>
    </div>
  );
}

export default App;
