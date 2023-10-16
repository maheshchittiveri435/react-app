import "./App.css";
import Header from "./components/Header";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Checklist from "./components/Checklist";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        
        <Routes>
          <Route exact path="/" element={<Checklist/>}></Route>
          <Route path="/Quotes" element={<Checklist/>}></Route>
          <Route path="/Conversations" element={<div>Add dialoges here</div>}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
