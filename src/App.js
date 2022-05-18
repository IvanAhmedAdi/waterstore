
import './App.css';
import NavBar from './components/Navbar/NavBar.js';

import ItemListConteiner  from './components/ItemListConteiner';

function App() {
  return (
    <div className="App">
        <NavBar />

        <section className="itemlistconteiner">

            <ItemListConteiner greeting="Lista de catalogo"/>   
            
        </section>
    </div>
    
  );
}

export default App;
