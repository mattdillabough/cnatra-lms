import './App.css';
import Routes from "./Routes"
import NavigationBar from "./Components/NavigationBar"

function App() {
  return (
    <div className="App">
      <Routes/>
      <NavigationBar/>
      <h2>Hello World</h2>
    </div>
  );
}

export default App;
