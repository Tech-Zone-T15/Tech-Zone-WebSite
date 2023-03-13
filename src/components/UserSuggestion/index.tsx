import {
   ListSuggestions,
   UserSuggestionContainer,
   CardUserSuggestion,
} from "./style";
import { StyledButton } from "../../styles/button";
import { useContext } from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import { UserContext } from "../../Providers/UserContext";

const UserSuggestion = () => {
   const {
      followUsers,
      followedsUsers,
      text1,
      setText1,
      setText2,
      setText3,
      text2,
      text3,
   } = useContext(DashboardContext);

   const { user } = useContext(UserContext);

   const onFollowUser = (id: number, event: any) => {
      const idUser = user?.id;

      const newFollow = {
         userId: Number(idUser),
         follows: id,
      };
      followedsUsers(newFollow);
      if (event.target.id == 0) {
         setText1("Seguindo");
      }

      if (event.target.id == 1) {
         setText2("Seguindo");
      }

      if (event.target.id == 2) {
         setText3("Seguindo");
      }
   };

   return (
      <UserSuggestionContainer>
         <h2>Conecte se com mais pessoas</h2>
         <ListSuggestions>
            {followUsers.length > 0 &&
               followUsers.map((user, index) => {
                  return (
                     <CardUserSuggestion key={user.id}>
                        <div className="div-user">
                           <img src={user.profile_img} alt="" />
                           <h3>{user.name}</h3>
                        </div>
                        <StyledButton
                           $buttonSize="small"
                           $buttonStyle="blue"
                           onClick={(event) => onFollowUser(user.id, event)}>
                           {index === 0 && text1}

                           {index === 1 && text2}

                           {index === 2 && text3}
                        </StyledButton>
                     </CardUserSuggestion>
                  );
               })}
         </ListSuggestions>
      </UserSuggestionContainer>
   );
};

export default UserSuggestion;
