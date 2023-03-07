import Post from "../../components/Posts";
import { useContext,useEffect } from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import { UserContext } from "../../Providers/UserContext";


const DashboardPage = () => {

   const {getPosts} = useContext(DashboardContext)
   const {getAllUser} = useContext(UserContext)

   
   useEffect(() => { 
      getPosts(); 
      getAllUser()
   }, []);

   

   return(
      <>

      <header></header>
      
      <main>

         <div> <p>Input Para enviar os post </p></div>

         <Post/>

      </main>

      <aside></aside>

      </>

   )

};

export default DashboardPage ;
