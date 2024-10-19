import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import Gadgets from "./pages/Gadgets";

const App = () => {
  return (
    <div>
      
      <Header />
      <Outlet />
      <Gadgets />
      <Footer />
      
=======
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
>>>>>>> 9ec866ad232901ba253445aadd066978180bad85
    </div>
  );
};

export default App;
