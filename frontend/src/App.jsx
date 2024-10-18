import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import PostHeader from "./components/postPageComponents/PostHeader";
import PostContent from "./components/postPageComponents/PostContent";
import PostFooter from './components/postPageComponents/PostFooter';

const App = () => {
  return (
    <div>
      <Header />
      <PostHeader />
      <PostContent />
      <PostFooter />
      <Footer />
    </div>
  );
};

export default App;
