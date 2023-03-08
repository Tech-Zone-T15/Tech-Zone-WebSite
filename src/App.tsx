import Router from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProfileProvider } from "./Providers/ProfileContext";
import { UserProvider } from "./Providers/UserContext";
import { GlobalStyles } from "./styles/global";

const App =() => (
   <UserProvider>
         <ProfileProvider>
            <GlobalStyles />
            <Router />
            <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
         </ProfileProvider>
   </UserProvider>
);


export default App;
