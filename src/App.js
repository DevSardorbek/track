import "./App.css";
import Complate from "./components/complate/Complate";
import Delivery from "./components/delivery/Delivery";
import Employees from "./components/employees/Employees";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Partners from "./components/partners/Partners";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Complate />
      <Delivery />
      <Partners />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;
