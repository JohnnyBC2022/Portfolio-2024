import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import { HomePage } from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Navigation />
      <div>
        <HomePage />
      </div>
    </>
  );
}

export default App;
