import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Gadgets from "./pages/Gadgets";

const App = () => {
  return (
    <div>
      
      <Header />
      <Outlet />
      <Gadgets />
      <Footer />
      
    </div>
  );
};

export default App;
