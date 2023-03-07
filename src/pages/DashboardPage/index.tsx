import { DashboarHeader } from "../../components/Header";
import Post from "../../components/Posts";
import UserSuggestion from "../../components/UserSuggestion";
import { NavBar } from "./style";


const DashboardPage = () => {
   return (
      <>
         <header></header>
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
            <UserSuggestion />
            <div>
               {" "}
               <p>Input Para enviar os post </p>
            </div>
         </main>
            </>

)};

export default DashboardPage;
