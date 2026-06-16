import LandingPage from "./features/LandingPages";
import { useState } from "react";
import LoginForm from "./auth/LoginForm";
import { userDb } from "./data/mockdb";
import DashboardLayout from "./features/dashboard/Dashboard layout";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState("landing");
  const [user, setUser] = useState(null);

  const handleLogin = (userName, passWord) => {

    const foundUser = userDb.find( (usercred) => 
      usercred.username === userName && usercred.password == passWord,
  );

    if (foundUser) {
      setUser(foundUser);

      setCurrentRoute("dashboard");
      return true;
    } else {
     return false;
    } 
  };

  switch (currentRoute) {
    case "landing":
      return <LandingPage onNavigateLogin={() => setCurrentRoute("login")} />;
    case "login":
      
      return <LoginForm onLogin={handleLogin} onBack={() => setCurrentRoute("landing")} />;
      
      case "dashboard":
        if (!user) {
          setCurrentRoute("login");
          return null;
        }
        return <DashboardLayout user={user} onLogout={null}/>

    default:
      return <LandingPage onNavigateLogin={() => setCurrentRoute("login")} />;
  }
}
