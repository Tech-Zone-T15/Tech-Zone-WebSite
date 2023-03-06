import React from 'react'
import { DynamicHeader } from '../../components/DynamicHeader'
import { StyledButton } from '../../styles/button'

function LandingPage() {
   return (
      <div>
      <DynamicHeader text1='Login' text2='Cadastro' location1='/login' location2='/register'/>
      <h1>Teste</h1>
      LandingPage
      </div>
   )
}

export default LandingPage