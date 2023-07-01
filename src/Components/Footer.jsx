import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'


const Footer = () => {
   const {state} = useContext(ContextGlobal);

  return (
    <footer style={{ background: state.theme.backgroundFooter,  color:state.theme.color }}>
        <p>Powered by</p>
        <img src='./images/DH.png' width={200} alt='DH-logo'/>
    </footer>
  )
}

export default Footer