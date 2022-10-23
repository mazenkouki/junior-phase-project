import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/navbar";
import Create from "./components/Create";
import Popular from "./components/Popular";
import Signup from "./components/Signup"
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Navbar/>
     
     <div className = "pages">
     <Routes >
{/* <Route   path = "sign" element = {<Signup/>}/> */}
<Route path ="/" element = {<Home/>} />
<Route path ="login" element = {<Login/>} />
<Route path ="signup" element = {<Signup/>} />
<Route  path = "Create" element = {<Create/>}/>
<Route  path = "popular" element = {<Popular/>}/>
     </Routes>
     </div>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
