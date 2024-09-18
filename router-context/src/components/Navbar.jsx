import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <div className="estilizacaoConteudoELink">
    <nav>
      
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link>
        
    </nav>
    </div>
  )
}

export default Navbar
