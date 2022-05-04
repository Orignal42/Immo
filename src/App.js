import React from "react";
import "./App.css";
import ImmoList from "./Components/ImmoList";
import Formulaire from "./Components/Formulaire";
import { BrowserRouter as Router,Link , Route,Routes} from "react-router-dom";
import ImmoDetail from "./Components/ImmoDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImmoList />} />
        <Route path="Immodetail/:id" element={<ImmoDetail />} />
        <Route path="Formulaire" element={<Formulaire/>} />
      </Routes>
      <div>
      <Link to='Formulaire'>
      <button type="button" className="btn btn-info">Formulaire</button>
      </Link>
      </div>
    </Router>
  );
}

export default App;
