import NavBar from "./components/NavBar";
import { Homepage } from "./components/Homepage";
import SocialLinks from "./components/SocialLinks";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
      <SocialLinks/>
    </div>
  );
}

export default App;
