import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import PlayerForm from './pages/PlayerForm.js'

function App() {
  const [state,setState] = useState({})
  const getAPI = ()=>{
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => setState({ apiResponse: res }));
  }

  useEffect(() => {
    getAPI();
    
  }, [])
  return (
    <div className="App">
    <PlayerForm/>
    <h1>{state.apiResponse}</h1>
    </div>
    
  );
}

export default App;
