import "./App.css";
import Header from "./components/layout/Header";
import AvailableMeals from "./components/meals/AvailableMeals";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <AvailableMeals />
      </main>
    </div>
  );
}

export default App;
