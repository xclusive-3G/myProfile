import NavBar from "./components/NavBar";
import { Homepage } from "./components/Homepage";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
