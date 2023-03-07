import {
   ListSuggestions,
   UserSuggestionContainer,
   CardUserSuggestion,
} from "./style";
import { StyledButton } from "../../styles/button";
import { useContext } from "react";
import { DashboardContext } from "../../Providers/DashboardContext";

const UserSuggestion = () => {
   const { followUsers } = useContext(DashboardContext);

   return (
      <UserSuggestionContainer>
         <h2>Conecte se com mais pessoas</h2>
         <ListSuggestions>
            {followUsers.length > 0 &&
               followUsers.map((user) => {
                  return (
                     <CardUserSuggestion key={user.id}>
                        <div className="div-user">
                           <img src={user.profile_img} alt="" />
                           <h3>{user.name}</h3>
                        </div>
                        <StyledButton $buttonSize="small" $buttonStyle="blue">
                           Seguir
                        </StyledButton>
                     </CardUserSuggestion>
                  );
               })}
         </ListSuggestions>
      </UserSuggestionContainer>
   );
};

export default UserSuggestion;
