import { useContext, useEffect } from "react";
import { DynamicHeader } from "../../components/DynamicHeader";
import PerfilSelect from "../../components/PerfilSelect";
import PostsSelectPerfil from "../../components/PostsSelectPerfil";
import { DashboardContext } from "../../Providers/DashboardContext";
import { Iposts } from "../../Providers/DashboardContext/@types/dashboardTypes";
import {  Main, Ul } from "./styled";

const SelectPerfilPage = () => {

   
   const { ProfilePost, getUsers,users } = useContext(DashboardContext);

   const NewArrayPost = JSON.parse(
      localStorage.getItem("@kenzieTech:ProfilePost") || []
   );


   useEffect(() => {
      getUsers();
   }, []);

   return (
      <>
         <DynamicHeader
            text1="Voltar"
            text2="LogOut"
            location1="/dashboard"
            location2="/out"
         />
         
            <Main>

                  <PerfilSelect ProfilePost={ProfilePost[0]} />
               
                  <Ul>
                     {NewArrayPost.map((post: Iposts) => (
                        <PostsSelectPerfil post={post} key={post.id} />
                     ))}
                  </Ul>

            </Main>

      </>
   );
};

export default SelectPerfilPage;
