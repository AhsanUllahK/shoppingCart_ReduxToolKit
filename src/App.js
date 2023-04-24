import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductCard />
    </div>
  );
}

export default App;
