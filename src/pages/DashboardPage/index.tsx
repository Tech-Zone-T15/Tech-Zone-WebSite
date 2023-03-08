import { DashboarHeader } from "../../components/Header";
import Post from "../../components/Posts";


const DashboardPage = () => {


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
