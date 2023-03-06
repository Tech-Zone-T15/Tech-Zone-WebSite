import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../../styles/button'
import { DynamicHeaderButtons, IHeaderButtonsProps } from './DynamicHeaderButtons'
import { StyledHeader } from './style'


export const DynamicHeader = ({text1, location1, text2, location2}: IHeaderButtonsProps) => {
   const navigate = useNavigate()
  return (
   <StyledHeader>
      <div>
            <img src="../../src/assets/TechZone.png" alt="" />
      </div>
      <DynamicHeaderButtons text1={text1} text2={text2} location1={location1} location2={location2}/>
   </StyledHeader>
  )
}
