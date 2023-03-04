import React from "react";
import Router from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DashboardProvider } from "./Providers/DashboardContext";
import { ProfileProvider } from "./Providers/ProfileContext";
import { UserProvider } from "./Providers/UserContext";
import { GlobalStyles } from "./styles/global";

const App =() => (
    <UserProvider>
      <DashboardProvider>
        <ProfileProvider>
          <GlobalStyles />
          <Router />
          <ToastContainer
            position="top-right"
            autoClose={5000}
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
      </DashboardProvider>
    </UserProvider>
);


export default App;
