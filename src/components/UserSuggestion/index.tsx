import {
   ListSuggestions,
   UserSuggestionContainer,
   CardUserSuggestion,
} from "./style";
import { StyledButton } from "../../styles/button";
import { useContext } from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import { UserContext } from "../../Providers/UserContext";
import { ProfileContext } from "../../Providers/ProfileContext";

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
      allUsersFollowed,
   } = useContext(DashboardContext);

   const { user } = useContext(UserContext);
   const { unfollow } = useContext(ProfileContext);

   const onFollowUser = (id: number, event: any) => {
      const idUser = user!.id;

      const newFollow = {
         userId: Number(idUser),
         follows: id,
      };

      if (event.target.innerText === "Seguir") {
         followedsUsers(newFollow);
      } else {
         const idFound = allUsersFollowed.find((user) => {
            return user.follows === id;
         });

         idFound && unfollow(idFound!.id!);
      }

      if (event.target.id == 0) {
         setText1("Seguindo");
         if (event.target.innerText === "Seguindo") {
            setText1("Seguir");
         }
      }

      if (event.target.id == 1) {
         setText2("Seguindo");
         if (event.target.innerText === "Seguindo") {
            setText2("Seguir");
         }
      }

      if (event.target.id == 2) {
         setText3("Seguindo");
         if (event.target.innerText === "Seguindo") {
            setText3("Seguir");
         }
      }
   };

   return (
      <UserSuggestionContainer>
         <div className="container">
            <h2>Conecte se com mais pessoas</h2>
            <ListSuggestions>
               {followUsers.length > 0 &&
                  followUsers.map((user, index: number) => {
                     return (
                        <CardUserSuggestion key={user.id}>
                           <div className="div-user">
                              <img src={user.profile_img} alt="" />
                              <h3>{user.name}</h3>
                           </div>
                           <StyledButton
                              $buttonSize="small"
                              $buttonStyle="blue"
                              id={index.toString()}
                              onClick={(event) => onFollowUser(user.id, event)}
                           >
                              {index === 0 && text1}

                              {index === 1 && text2}

                              {index === 2 && text3}
                           </StyledButton>
                        </CardUserSuggestion>
                     );
                  })}
            </ListSuggestions>
         </div>
      </UserSuggestionContainer>
   );
};

export default UserSuggestion;
