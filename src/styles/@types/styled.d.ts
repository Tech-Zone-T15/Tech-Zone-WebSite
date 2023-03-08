import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };
    colors: {
      primary: string;
      primary2: string;
      secondary: string;
      red: string;
      gray4: string;
      gray3: string;
      gray2: string;
      gray1: string;
      white: string;
      feedback: {
        negative: string;
        warning: string;
        sucess: string;
        information: string;
      };
    };
  }
}
