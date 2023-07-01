import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state,toggleTheme} = useContext(ContextGlobal);
  
  
  return (
    <nav  style={{ background: state.theme.backgroundNavbar, color:state.theme.color }} >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div><Link to="/"><img src='./images/DH.png' width={200} alt='DH-logo'/></Link></div>
      <div className="linksNav">
      <Link to="/">Home</Link>
      <Link to="/contacto">Contact</Link>
      <Link to="/favs">Favs</Link>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div><button className="darkButton" onClick={toggleTheme}>
      🔅 </button></div>
    </nav>
  )
}

export default Navbar