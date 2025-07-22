import './Styles/App.css';
import Header from "./Components/header"
import InputContainer from './Components/inputcontainer';
import GenerateContainer from './Components/generatecontainer';
import Resultcontainer from './Components/resultcontainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState , useEffect} from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(()=>{
    document.body.classList.toggle("dark-mode", darkMode);
  },[darkMode])
  return (
    <div className="fullpage">
      <div className={`card mb-3 internal ${darkMode ? "dark" : "light"}`}>


        <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
        <div className="card-body">
          <InputContainer></InputContainer>
          <GenerateContainer darkMode={darkMode} ></GenerateContainer>
          <Resultcontainer></Resultcontainer> 
        </div>
      </div>
    </div>
  );
}


export default App;
