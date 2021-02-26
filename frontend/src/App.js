import './App.css';
import Routes from "./Routes"
import NavigationBar from "./Components/NavigationBar"

function App() {
  return (
    <div className="App container-fluid">
      <NavigationBar/>
      <Routes/>
    </div>
  );
}

export default App;
