import { Input, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../../Providers/UserContext'
import { StyledButton, StyledButtonLink } from '../../styles/button'
import { StyledTextField } from '../../styles/form'
import { StyledContainer } from '../../styles/grid'
import { StyledParagraph } from '../../styles/typography'
import { StyledHeaderDash } from './style'

export const DashboarHeader = () => {

   const { user, userLogOut } = useContext(UserContext)

  return (
   <StyledHeaderDash>
      <StyledContainer containerWidth={1300}>
         <div id='header'>
            <div id='header__div-left'>
               <div id='header__perfil'>
                  <div>
                     <img src={user?.profile_img}/>
                  </div>
                  <StyledParagraph>{user?.name}</StyledParagraph>
               </div>
            </div>
            <div id='header__div-right'>
               <StyledTextField />
               <div id='buttons__div'>
                  <StyledButtonLink to='/perfil' $buttonSize='small' $buttonStyle='white' >
                     Perfil
                  </StyledButtonLink>
                  <StyledButton type='button' $buttonSize='small' $buttonStyle='blue' onClick={() => userLogOut()}>
                     Sair
                  </StyledButton>
               </div>
            </div>
         </div>
      </StyledContainer>
   </StyledHeaderDash>
  )
}
