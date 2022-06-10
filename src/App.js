import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Servicios from './Components/servicios/Servicios';
import Footer from './Components/footer/Footer';
import Formulario from './Components/formulario/Formulario';


function App() {

  const [user, setUser] = useState({
    nombre:'',
    telefono: '',
    email: '',
  })

  
  return (
    <div className="App">
      <Navbar/>
      <Servicios />
      <Formulario user={user} setUser={setUser}/>
      <Footer/>
    </div>
  );
}

export default App;
