import { Input, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserContext";
import { StyledButton, StyledButtonLink } from "../../styles/button";
import { StyledTextField } from "../../styles/form";
import { StyledContainer } from "../../styles/grid";
import { StyledParagraph } from "../../styles/typography";
import SearchForm from "./SearchForm";
import { StyledHeaderDash } from "./style";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export const DashboarHeader = () => {
   const { user, userLogOut } = useContext(UserContext);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      console.log("click");
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <StyledHeaderDash>
         <StyledContainer containerWidth={1300}>
            <div id="header__div">
               <div id="header__div-left">
                  <div id="header__perfil">
                     <div>
                        <img src={user?.profile_img} />
                     </div>
                     <StyledParagraph>{user?.name}</StyledParagraph>
                  </div>
               </div>
               <button className="menu-btn" onClick={toggleMenu}>
                  <span className="menu-icon">&#8801;</span>
               </button>
               <div className={`header__div-right ${isMenuOpen ? "show" : ""}`}>
                  <div id="buttons__div">
                     <div>
                        <SearchForm />
                     </div>
                     <div>
                        <StyledButtonLink
                           to="/perfil"
                           $buttonSize="small"
                           $buttonStyle="white"
                        >
                           Perfil
                        </StyledButtonLink>
                        <StyledButton
                           type="button"
                           $buttonSize="small"
                           $buttonStyle="blue"
                           onClick={() => userLogOut()}
                        >
                           Sair
                        </StyledButton>
                     </div>
                  </div>
                  <div className="menu-close" onClick={toggleMenu}>
                     <KeyboardDoubleArrowUpIcon />
                  </div>
               </div>
            </div>
         </StyledContainer>
      </StyledHeaderDash>
   );
};
