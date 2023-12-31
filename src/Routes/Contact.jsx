import React from 'react'
import Form from '../Components/Form'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useContext(ContextGlobal);

  return (
    <div style={{ background: state.theme.backgroundCard, color:state.theme.color }}>
      <div className='formDiv'>
      <h1>Want to know more?</h1>
      <p  style={{ textAlign: 'center', paddingBottom:'1rem'}}>Send us your questions and we will contact you</p>
      <Form/> 
      </div>
      
    </div>
  )
}

export default Contact