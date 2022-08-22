import Topbar from "./Topbar";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Works from "./Work";
import Contact from "./Contact";
import "./app.scss";
import {useState} from "react";

function App() {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;