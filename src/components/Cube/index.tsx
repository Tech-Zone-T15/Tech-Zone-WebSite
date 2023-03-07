import React from 'react'
import { StyledCubeContainer } from './style'

type CustomStyles = {
   '--i': number;
 }

export const Cube = () => {
  return (
    <StyledCubeContainer>
      <div className="cube">
        <div className="top"></div>

        <div>

            <span style={{'--i':0} as React.CSSProperties & CustomStyles}></span>
            <span style={{'--i':1} as React.CSSProperties & CustomStyles}></span>
            <span style={{'--i':2} as React.CSSProperties & CustomStyles}></span>
            <span style={{'--i':3} as React.CSSProperties & CustomStyles}></span>

        </div>

    </div>
    
    <div className="cube2">
        <div className="top2"></div>

        <div>

            <span style={{'--i':0} as React.CSSProperties & CustomStyles}></span>
            <span style={{'--i':1} as React.CSSProperties & CustomStyles}></span>
            <span style={{'--i':2} as React.CSSProperties & CustomStyles}></span>
            <span style={{'--i':3} as React.CSSProperties & CustomStyles}></span>

        </div>

    </div>

    <div className="cube3">
        <div className="top3"></div>

        <div>

            <span style={{'--i':0} as React.CSSProperties & CustomStyles}></span>
            <span style={{'--i':1} as React.CSSProperties & CustomStyles}></span>
            <span style={{'--i':2} as React.CSSProperties & CustomStyles}></span>
            <span style={{'--i':3} as React.CSSProperties & CustomStyles}></span>

        </div>

    </div>
    </StyledCubeContainer>
  )
}
