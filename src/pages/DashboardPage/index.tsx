
import UserSuggestion from "../../components/UserSuggestion";
import { NavBar } from "./style";
import { DashboarHeader } from "../../components/Header";
import Post from "../../components/Posts";
import { useContext,useEffect } from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import SkeletonPost from "../../components/SkeletonPost";



const DashboardPage = () => {

   const {getUsers,getAllPosts,loading} = useContext(DashboardContext)

   useEffect(() => { 
      getUsers()
      getAllPosts()
   }, []);


   return (

      <>
         <DashboarHeader/>
         <NavBar>
            <div>
               <button>Html</button>
               <button>Css</button>
               <button>JavaScript</button>
               <button>React</button>
               <button>Angular</button>
               <button>Vue.js</button>
               <button>TypeScript</button>
               <button>Node.js</button>
            </div>
         </NavBar>
         <main>
            <div>
               <p>Input Para enviar os post </p>
            </div>

            {loading == false? (<SkeletonPost/>):(<Post/>)}
            
         </main>
         <aside>
            <UserSuggestion />
         </aside>
      </>

)};

export default DashboardPage;
