import { useState } from "react";
import {
   DynamicHeaderButtons,
   IHeaderButtonsProps,
} from "./DynamicHeaderButtons";
import { StyledHeader } from "./style";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { StyledContainer } from "../../styles/grid";
export const DynamicHeader = ({
   text1,
   location1,
   text2,
   location2,
}: IHeaderButtonsProps) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };
   return (
      <StyledHeader>
         <StyledContainer>
            <div>
               <img src="../../src/assets/TechZone.png" alt="" />
            </div>
            <button className="menu-btn" onClick={toggleMenu}>
               <span className="menu-icon">&#8801;</span>
            </button>
            <div className={`menu-items ${isMenuOpen ? "show" : ""}`}>
               <DynamicHeaderButtons
                  text1={text1}
                  text2={text2}
                  location1={location1}
                  location2={location2}
                  />
               <div className="menu-close" onClick={toggleMenu}>
                  <KeyboardDoubleArrowUpIcon />
               </div>
            </div>
         </StyledContainer>
      </StyledHeader>
   );
};
