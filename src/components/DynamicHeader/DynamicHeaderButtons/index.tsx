import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../../../styles/button';
import { StyledDynamicButtons } from './style';


export interface IHeaderButtonsProps{
   text1: string;
   location1: string;
   text2: string;
   location2: string;

}

export const DynamicHeaderButtons = ({text1, location1, text2, location2}: IHeaderButtonsProps) => {
   const navigate = useNavigate()
  return (
   <StyledDynamicButtons>
         <StyledButton $buttonSize='medium' $buttonStyle='white' onClick={() => {navigate({pathname: location1})}}>{text1}</StyledButton>
         <StyledButton $buttonSize='medium' $buttonStyle='blue' onClick={() => {navigate({pathname: location2})}}>{text2}</StyledButton>
   </StyledDynamicButtons>
  )
}