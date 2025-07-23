import NavBar from "./components/NavBar";
import { Homepage } from "./components/Homepage";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <ChatBot/>
    </div>
  );
}

export default App;
