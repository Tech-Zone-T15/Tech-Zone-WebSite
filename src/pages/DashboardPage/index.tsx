import { DashboarHeader } from "../../components/Header";
import Post from "../../components/Posts";
import { useContext,useEffect } from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import { UserContext } from "../../Providers/UserContext";


const DashboardPage = () => {

   const {getUsers } = useContext(DashboardContext)

   
   useEffect(() => { 
      getUsers (); 
   }, []);

   

   return(
      <>

      <DashboarHeader/>
      
      <main>

         <div> <p>Input Para enviar os post </p></div>

         <Post/>

      </main>

      <aside></aside>

      </>

   )

};

export default DashboardPage ;
