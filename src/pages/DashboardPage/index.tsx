
import UserSuggestion from "../../components/UserSuggestion";
import { NavBar } from "./style";
import { DashboarHeader } from "../../components/Header";
import Post from "../../components/Posts";
import { useContext,useEffect } from "react";
import { DashboardContext } from "../../Providers/DashboardContext";
import SkeletonPost from "../../components/SkeletonPost";
import { useLocation } from "react-router-dom";



const DashboardPage = () => {

   const {getUsers,getAllPosts,loading} = useContext(DashboardContext)

   useEffect(() => { 
      getUsers()
      getAllPosts()
   }, []);

   const location = useLocation()
   localStorage.setItem('@location', location.pathname)
   // console.log(location.pathname)

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
